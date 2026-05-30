document.addEventListener("DOMContentLoaded", () => {
  const analytics = createAnalytics();

  setupConsentBanner(analytics);
  setupCopyEmail(analytics);
  setupInteractionTracking(analytics);
  setupNavState();
  setupPrivacyNotice();
  setupSectionReveal();
});

function createAnalytics() {
  const consentKey = "robsonai.analytics-consent";
  const gaId = document.querySelector('meta[name="ga4-measurement-id"]')?.content.trim() ?? "";
  const hasMeasurementId = /^G-[A-Z0-9]+$/i.test(gaId);
  const pageType = document.body.dataset.pageType || "website";

  let analyticsLoaded = false;
  let consentState = window.localStorage.getItem(consentKey);
  let queuedEvents = [];

  const getPagePath = () => `${window.location.pathname}${window.location.hash}`;

  const baseParams = () => ({
    page_path: getPagePath(),
    page_title: document.title,
    page_type: pageType
  });

  const ensureGtag = () => {
    if (typeof window.gtag === "function") {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  };

  const applyConsent = (analyticsStorage) => {
    if (typeof window.gtag !== "function") {
      return;
    }

    window.gtag("consent", "update", {
      analytics_storage: analyticsStorage,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
  };

  const loadAnalytics = () =>
    new Promise((resolve, reject) => {
      if (!hasMeasurementId) {
        resolve(false);
        return;
      }

      if (analyticsLoaded) {
        resolve(true);
        return;
      }

      const existingScript = document.querySelector('script[data-ga4-loader="true"]');

      const finalize = () => {
        analyticsLoaded = true;
        ensureGtag();
        window.gtag("js", new Date());
        applyConsent("granted");
        window.gtag("config", gaId, {
          send_page_view: false,
          anonymize_ip: true
        });
        resolve(true);
      };

      ensureGtag();
      window.gtag("consent", "default", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied"
      });

      if (existingScript) {
        if (existingScript.dataset.loaded === "true") {
          finalize();
          return;
        }

        existingScript.addEventListener("load", finalize, { once: true });
        existingScript.addEventListener("error", () => reject(new Error("GA4 loader failed")), { once: true });
        return;
      }

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
      script.dataset.ga4Loader = "true";
      script.addEventListener(
        "load",
        () => {
          script.dataset.loaded = "true";
          finalize();
        },
        { once: true }
      );
      script.addEventListener("error", () => reject(new Error("GA4 loader failed")), { once: true });
      document.head.append(script);
    });

  const flushQueue = () => {
    if (!analyticsLoaded || typeof window.gtag !== "function") {
      return;
    }

    queuedEvents.forEach(({ name, params }) => {
      window.gtag("event", name, { ...baseParams(), ...params });
    });
    queuedEvents = [];
  };

  return {
    hasMeasurementId,
    getConsentState() {
      return consentState;
    },
    async grantConsent() {
      consentState = "granted";
      window.localStorage.setItem(consentKey, consentState);

      if (!hasMeasurementId) {
        return { active: false };
      }

      await loadAnalytics();
      flushQueue();
      return { active: true };
    },
    denyConsent() {
      consentState = "denied";
      window.localStorage.setItem(consentKey, consentState);
      applyConsent("denied");
    },
    async restoreConsent() {
      if (consentState !== "granted") {
        if (consentState === "denied") {
          applyConsent("denied");
        }
        return;
      }

      if (!hasMeasurementId) {
        return;
      }

      await loadAnalytics();
      flushQueue();
    },
    track(name, params = {}) {
      if (consentState !== "granted" || !hasMeasurementId) {
        return;
      }

      if (!analyticsLoaded || typeof window.gtag !== "function") {
        queuedEvents.push({ name, params });
        return;
      }

      window.gtag("event", name, { ...baseParams(), ...params });
    }
  };
}

function setupConsentBanner(analytics) {
  const banner = document.querySelector("[data-consent-banner]");
  const acceptButton = document.querySelector("[data-consent-accept]");
  const declineButton = document.querySelector("[data-consent-decline]");
  const openButtons = document.querySelectorAll("[data-open-consent]");
  const status = document.querySelector("[data-consent-status]");

  if (!banner || !acceptButton || !declineButton || !status) {
    analytics.restoreConsent();
    return;
  }

  const setStatus = (message) => {
    status.textContent = message;
  };

  const openBanner = () => {
    banner.hidden = false;
    banner.style.display = "";
    banner.setAttribute("aria-hidden", "false");
  };

  const closeBanner = () => {
    banner.hidden = true;
    banner.style.display = "none";
    banner.setAttribute("aria-hidden", "true");
  };

  const consentState = analytics.getConsentState();

  if (!consentState) {
    openBanner();
  } else {
    closeBanner();
  }

  analytics.restoreConsent();

  acceptButton.addEventListener("click", async () => {
    const result = await analytics.grantConsent();
    setStatus(
      result.active
        ? "Analytics preference saved."
        : "Analytics preference saved. Analytics will stay inactive until a measurement ID is configured."
    );
    closeBanner();
  });

  declineButton.addEventListener("click", () => {
    analytics.denyConsent();
    setStatus("Analytics declined.");
    closeBanner();
  });

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openBanner();
      setStatus("Update your analytics preference.");
    });
  });
}

function setupCopyEmail(analytics) {
  const copyButton = document.querySelector("[data-copy-email]");
  const feedback = document.querySelector("[data-copy-feedback]");

  if (!copyButton || !feedback) {
    return;
  }

  const emailAddress = copyButton.getAttribute("data-copy-value");

  if (!emailAddress) {
    return;
  }

  const setFeedback = (message) => {
    feedback.textContent = message;
  };

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setFeedback("Email address copied.");
      analytics.track("email_copy", {
        analytics_id: copyButton.dataset.analyticsId || "contact-copy-email",
        outcome: "success"
      });
    } catch (error) {
      setFeedback("Copy failed. Please use hello@robsonai.co.uk.");
      analytics.track("email_copy", {
        analytics_id: copyButton.dataset.analyticsId || "contact-copy-email",
        outcome: "failed"
      });
    }
  });
}

function setupPrivacyNotice() {
  const privacyDetails = document.querySelector("#privacy-notice .holding-privacy-card");
  const privacyTriggers = document.querySelectorAll("[data-open-privacy]");

  if (!privacyDetails || privacyTriggers.length === 0) {
    return;
  }

  privacyTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      privacyDetails.open = true;
      privacyDetails.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", "#privacy-notice");
    });
  });
}

function setupInteractionTracking(analytics) {
  setupSectionViewTracking(analytics);
  setupScrollDepthTracking(analytics);

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      analytics.track("nav_click", {
        analytics_id: link.dataset.analyticsId || link.textContent.trim().toLowerCase().replace(/\s+/g, "-"),
        target: link.getAttribute("href") || ""
      });
    });
  });

  document.querySelectorAll("[data-cta-location]").forEach((element) => {
    element.addEventListener("click", () => {
      analytics.track("cta_click", {
        analytics_id: element.dataset.analyticsId || element.textContent.trim().toLowerCase().replace(/\s+/g, "-"),
        cta_location: element.dataset.ctaLocation || "unknown"
      });
    });
  });

  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener("click", () => {
      analytics.track("mailto_click", {
        analytics_id: link.dataset.analyticsId || "mailto-link",
        target: link.getAttribute("href") || ""
      });
    });
  });

  document.querySelectorAll("[data-proof-surface] a, [data-proof-surface] button").forEach((element) => {
    element.addEventListener("click", () => {
      analytics.track("proof_interaction", {
        analytics_id: element.dataset.analyticsId || element.textContent.trim().toLowerCase().replace(/\s+/g, "-"),
        section: element.closest("[data-section]")?.dataset.section || "proof"
      });
    });
  });
}

function setupNavState() {
  const navLinks = Array.from(document.querySelectorAll(".site-nav a"));

  if (!navLinks.length) {
    return;
  }

  const normalizePath = (value) => {
    const url = new URL(value, window.location.href);
    let path = url.pathname;

    if (path.endsWith("/index.html")) {
      path = path.slice(0, -"/index.html".length) || "/";
    }

    return path || "/";
  };

  const setCurrent = (activeLink) => {
    navLinks.forEach((link) => {
      if (link === activeLink) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const currentPath = normalizePath(window.location.href);
  const samePageLink = navLinks.find((link) => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("#")) {
      return false;
    }

    return normalizePath(href) === currentPath;
  });

  if (samePageLink) {
    setCurrent(samePageLink);
  }

  const sectionLinks = navLinks
    .map((link) => {
      const href = link.getAttribute("href") || "";

      if (!href.startsWith("#")) {
        return null;
      }

      const target = document.querySelector(href);

      if (!target) {
        return null;
      }

      return { link, target };
    })
    .filter(Boolean);

  if (!sectionLinks.length || !("IntersectionObserver" in window)) {
    return;
  }

  let currentSectionId = window.location.hash || `#${sectionLinks[0].target.id}`;

  const updateCurrentSection = (nextHash) => {
    const match = sectionLinks.find(({ target }) => `#${target.id}` === nextHash);

    if (!match) {
      return;
    }

    currentSectionId = nextHash;
    setCurrent(match.link);
  };

  if (window.location.hash) {
    updateCurrentSection(window.location.hash);
  }

  const visibleSections = new Map();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const hash = `#${entry.target.id}`;

        if (entry.isIntersecting) {
          visibleSections.set(hash, entry.intersectionRatio);
        } else {
          visibleSections.delete(hash);
        }
      });

      if (!visibleSections.size) {
        return;
      }

      const [nextHash] = [...visibleSections.entries()].sort((left, right) => right[1] - left[1])[0];

      if (nextHash && nextHash !== currentSectionId) {
        updateCurrentSection(nextHash);
      }
    },
    {
      rootMargin: "-30% 0px -45% 0px",
      threshold: [0.2, 0.45, 0.7]
    }
  );

  sectionLinks.forEach(({ link, target }) => {
    link.addEventListener("click", () => {
      updateCurrentSection(`#${target.id}`);
    });
    observer.observe(target);
  });
}

function setupSectionViewTracking(analytics) {
  const sections = document.querySelectorAll("[data-section]");

  if (!sections.length || !("IntersectionObserver" in window)) {
    return;
  }

  const seenSections = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionName = entry.target.dataset.section;

        if (!entry.isIntersecting || !sectionName || seenSections.has(sectionName)) {
          return;
        }

        seenSections.add(sectionName);
        analytics.track("section_view", {
          section_name: sectionName
        });
      });
    },
    {
      threshold: 0.45
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupScrollDepthTracking(analytics) {
  const thresholds = [25, 50, 75, 100];
  const reached = new Set();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    const denominator = docHeight - viewportHeight;

    if (denominator <= 0) {
      return;
    }

    const percent = Math.min(100, Math.round((scrollTop / denominator) * 100));

    thresholds.forEach((threshold) => {
      if (percent >= threshold && !reached.has(threshold)) {
        reached.add(threshold);
        analytics.track("scroll_depth", {
          percent
        });
      }
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

function setupSectionReveal() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  const revealTargets = document.querySelectorAll(
    ".home-hero-copy, .home-hero-stage, .home-section-intro, .home-focus-manifesto, .home-product-map, .home-method-grid, .home-belief-panel, .home-contact-panel"
  );

  if (!revealTargets.length) {
    return;
  }

  document.body.classList.add("motion-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.18
    }
  );

  revealTargets.forEach((target, index) => {
    target.style.setProperty("--reveal-index", String(index % 4));
    observer.observe(target);
  });
}
