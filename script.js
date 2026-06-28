document.addEventListener("DOMContentLoaded", () => {
  const analytics = createAnalytics();

  setupConsentBanner(analytics);
  setupCopyEmail(analytics);
  setupInteractionTracking(analytics);
  setupInteractivePanels();
  setupBuildScanInteractiveModel(analytics);
  setupNavState();
  setupPrivacyNotice();
  setupAmbientMotion();
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
  const copyButtons = document.querySelectorAll("[data-copy-email]");

  if (!copyButtons.length) {
    return;
  }

  copyButtons.forEach((copyButton) => {
    const emailAddress = copyButton.getAttribute("data-copy-value");

    if (!emailAddress) {
      return;
    }

    const feedback =
      copyButton
        .closest(".home-contact-panel, .analyst-contact-card, .contact-panel, .holding-panel, .holding-copy, .footer-nav-group")
        ?.querySelector("[data-copy-feedback]") || document.querySelector("[data-copy-feedback]");

    const setFeedback = (message) => {
      if (feedback) {
        feedback.textContent = message;
      }
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

function setupInteractivePanels() {
  const interactivePanels = document.querySelectorAll("[data-interactive-panel]");

  if (!interactivePanels.length) {
    return;
  }

  interactivePanels.forEach((component) => {
    const triggers = Array.from(component.querySelectorAll("[data-panel-trigger]"));
    const panes = Array.from(component.querySelectorAll("[data-panel-pane]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let panelMotionTimer = 0;

    if (!triggers.length || !panes.length) {
      return;
    }

    const activatePanel = (panelId, shouldFocus = false) => {
      const activeTrigger = triggers.find((trigger) => trigger.dataset.panelTrigger === panelId);
      const activePane = panes.find((pane) => pane.dataset.panelPane === panelId);

      if (!activeTrigger || !activePane) {
        return;
      }

      triggers.forEach((trigger) => {
        const isActive = trigger === activeTrigger;
        trigger.classList.toggle("is-active", isActive);
        trigger.setAttribute("aria-selected", String(isActive));
        trigger.tabIndex = isActive ? 0 : -1;
      });

      panes.forEach((pane) => {
        pane.hidden = pane !== activePane;
        pane.classList.remove("is-panel-entering");
      });

      component.dataset.activePanel = panelId;

      if (!reducedMotion) {
        window.clearTimeout(panelMotionTimer);
        activePane.classList.remove("is-panel-entering");
        window.requestAnimationFrame(() => {
          activePane.classList.add("is-panel-entering");
          panelMotionTimer = window.setTimeout(() => {
            activePane.classList.remove("is-panel-entering");
          }, 360);
        });
      }

      if (shouldFocus) {
        activeTrigger.focus();
      }
    };

    triggers.forEach((trigger, index) => {
      trigger.addEventListener("click", () => {
        activatePanel(trigger.dataset.panelTrigger);
      });

      trigger.addEventListener("keydown", (event) => {
        const keyActions = {
          ArrowDown: 1,
          ArrowRight: 1,
          ArrowUp: -1,
          ArrowLeft: -1
        };

        if (event.key === "Home") {
          event.preventDefault();
          activatePanel(triggers[0].dataset.panelTrigger, true);
          return;
        }

        if (event.key === "End") {
          event.preventDefault();
          activatePanel(triggers[triggers.length - 1].dataset.panelTrigger, true);
          return;
        }

        if (!(event.key in keyActions)) {
          return;
        }

        event.preventDefault();

        const nextIndex = (index + keyActions[event.key] + triggers.length) % triggers.length;
        activatePanel(triggers[nextIndex].dataset.panelTrigger, true);
      });
    });

    const selectedTrigger =
      triggers.find((trigger) => trigger.getAttribute("aria-selected") === "true") || triggers[0];
    activatePanel(selectedTrigger.dataset.panelTrigger);
  });
}

function setupBuildScanInteractiveModel(analytics) {
  const viewers = document.querySelectorAll("[data-buildscan-interactive]");

  if (!viewers.length) {
    return;
  }

  viewers.forEach((viewer) => {
    const button = viewer.querySelector("[data-buildscan-load-model]");
    const frame = viewer.querySelector(".buildscan-model-frame");
    const image = viewer.querySelector(".buildscan-model-image");
    const loadStatus = viewer.querySelector("[data-buildscan-load-status]");

    if (!button || !frame) {
      return;
    }

    let loadTimeout = 0;

    const setLoadStatus = (message) => {
      if (loadStatus) {
        loadStatus.textContent = message;
      }
    };

    const resetLoadingState = (message) => {
      window.clearTimeout(loadTimeout);
      viewer.classList.remove("is-loading");
      viewer.classList.add("is-error");
      viewer.setAttribute("aria-busy", "false");
      button.disabled = false;
      button.removeAttribute("aria-busy");
      button.textContent = "Retry interactive model";
      setLoadStatus(message);
      frame.removeAttribute("src");
    };

    const markModelReady = () => {
      window.clearTimeout(loadTimeout);
      viewer.classList.remove("is-loading", "is-error");
      viewer.classList.add("is-loaded");
      viewer.setAttribute("aria-busy", "false");
      button.removeAttribute("aria-busy");
      button.textContent = "Interactive model loaded";
      if (image) {
        image.setAttribute("aria-hidden", "true");
      }
      setLoadStatus("Interactive model loaded.");
      analytics.track("proof_interaction", {
        analytics_id: button.dataset.analyticsId || "buildscan-load-interactive-model",
        section: viewer.closest("[data-section]")?.dataset.section || "buildscan-model-view",
        interaction_type: "interactive_model_loaded"
      });
    };

    window.addEventListener("message", (event) => {
      if (event.origin !== window.location.origin || event.source !== frame.contentWindow) {
        return;
      }

      const data = event.data || {};

      if (data.source !== "buildscan-viewer") {
        return;
      }

      if (data.state === "loading" && Number.isFinite(data.progress)) {
        setLoadStatus(`Loading interactive model... ${data.progress}%`);
        return;
      }

      if (data.state === "ready") {
        markModelReady();
        return;
      }

      if (data.state === "error") {
        resetLoadingState(data.message || "Interactive model could not load. The approved image remains available.");
        analytics.track("proof_interaction", {
          analytics_id: button.dataset.analyticsId || "buildscan-load-interactive-model",
          section: viewer.closest("[data-section]")?.dataset.section || "buildscan-model-view",
          interaction_type: "interactive_model_error"
        });
      }
    });

    button.addEventListener("click", () => {
      const src = frame.dataset.src;

      if (!src || viewer.classList.contains("is-loaded") || viewer.classList.contains("is-loading")) {
        return;
      }

      viewer.classList.remove("is-error");
      viewer.classList.add("is-loading");
      viewer.setAttribute("aria-busy", "true");
      button.disabled = true;
      button.setAttribute("aria-busy", "true");
      button.textContent = "Loading interactive model...";
      setLoadStatus("Loading interactive model...");

      loadTimeout = window.setTimeout(() => {
        resetLoadingState("Interactive model timed out. The approved image remains available.");
      }, 30000);

      frame.src = src;
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
    ".home-hero-stage, .home-section-intro, .home-focus-manifesto, .home-product-map, .workflow-finder-board, .home-method-grid, .home-belief-panel, .home-contact-panel, .assessment-lens-board"
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

function setupAmbientMotion() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");

  if (reducedMotion.matches || !finePointer.matches) {
    return;
  }

  const root = document.documentElement;
  const depthSurfaces = document.querySelectorAll(
    ".home-signal-board, .workflow-finder-board, .workflow-finder-panel, .operations-queue-card, .operations-meta-grid div, .operations-decision-rail article, .buildscan-window, .buildscan-model-viewport, .buildscan-proof-list article, .home-belief-panel, .home-contact-panel, .analyst-summary-card, .home-problem-card, .home-workflow-step, .home-contact-routes article, .analyst-core-card, .analyst-flow-card, .analyst-fit-card, .page-card, .fit-card"
  );

  document.body.classList.add("motion-pointer-ready");

  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let frameRequested = false;

  const setGlobalMotion = () => {
    const width = Math.max(window.innerWidth, 1);
    const height = Math.max(window.innerHeight, 1);
    const normalizedX = (pointerX / width - 0.5) * 2;
    const normalizedY = (pointerY / height - 0.5) * 2;

    root.style.setProperty("--ambient-x", `${(normalizedX * 18).toFixed(2)}px`);
    root.style.setProperty("--ambient-y", `${(normalizedY * 14).toFixed(2)}px`);
    root.style.setProperty("--ambient-x-soft", `${(normalizedX * 9).toFixed(2)}px`);
    root.style.setProperty("--ambient-y-soft", `${(normalizedY * 7).toFixed(2)}px`);
    root.style.setProperty("--ambient-x-soft-neg", `${(normalizedX * -9).toFixed(2)}px`);
    root.style.setProperty("--ambient-y-soft-neg", `${(normalizedY * -7).toFixed(2)}px`);
    root.style.setProperty("--ambient-rotate", `${(normalizedX * 1.4).toFixed(2)}deg`);
    frameRequested = false;
  };

  const requestGlobalMotion = () => {
    if (frameRequested) {
      return;
    }

    frameRequested = true;
    window.requestAnimationFrame(setGlobalMotion);
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      requestGlobalMotion();
    },
    { passive: true }
  );

  depthSurfaces.forEach((surface) => {
    surface.classList.add("motion-depth-surface");

    surface.addEventListener(
      "pointermove",
      (event) => {
        const rect = surface.getBoundingClientRect();
        const localX = (event.clientX - rect.left) / Math.max(rect.width, 1);
        const localY = (event.clientY - rect.top) / Math.max(rect.height, 1);
        const tiltX = (localX - 0.5) * 5;
        const tiltY = (0.5 - localY) * 5;

        surface.classList.add("is-motion-active");
        surface.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
        surface.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
        surface.style.setProperty("--surface-lift-x", `${((localX - 0.5) * 3).toFixed(2)}px`);
        surface.style.setProperty("--surface-lift-y", `${((localY - 0.5) * 3).toFixed(2)}px`);
      },
      { passive: true }
    );

    surface.addEventListener("pointerleave", () => {
      surface.classList.remove("is-motion-active");
      surface.style.setProperty("--tilt-x", "0deg");
      surface.style.setProperty("--tilt-y", "0deg");
      surface.style.setProperty("--surface-lift-x", "0px");
      surface.style.setProperty("--surface-lift-y", "0px");
    });
  });

  setGlobalMotion();
}
