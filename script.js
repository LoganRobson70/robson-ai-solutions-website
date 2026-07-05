document.addEventListener("DOMContentLoaded", () => {
  setupQaMode();
  setupHeroMeshCanvas();
  setupGlobeLoader();

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

function setupQaMode() {
  const params = new URLSearchParams(window.location.search);
  const qaMode = params.get("qa");

  if (qaMode === "axe" || qaMode === "static") {
    document.body.classList.add("qa-static");
  }
}

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

  if (!analytics.hasMeasurementId) {
    closeBanner();
  } else if (!consentState) {
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
      });

      component.dataset.activePanel = panelId;

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
  if (document.body.classList.contains("qa-static")) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  const revealTargets = [
    ...document.querySelectorAll(
      ".home-hero-stage, .home-section-intro, .home-focus-manifesto, .home-product-map, .workflow-finder-board, .home-method-grid, .home-belief-panel, .home-contact-panel, .assessment-lens-board, [data-reveal], [data-reveal-stagger] > *"
    )
  ];

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

  [...new Set(revealTargets)].forEach((target, index) => {
    target.style.setProperty("--reveal-index", String(index % 4));
    observer.observe(target);
  });
}

function setupHeroMeshCanvas() {
  const canvases = [...document.querySelectorAll("[data-mesh-canvas]")];

  if (!canvases.length) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const staticMode = document.body.classList.contains("qa-static");
  const shouldAnimate = !reducedMotion && !staticMode;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  let pointer = {
    active: false,
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5
  };

  const drawPalette = (tone) => {
    if (tone === "light") {
      return {
        line: "47, 91, 211",
        dot: "47, 91, 211",
        softDot: "6, 19, 61",
        accent: "245, 166, 35",
        baseLineAlpha: 0.16,
        gridAlpha: 0.09
      };
    }

    return {
      line: "99, 167, 242",
      dot: "156, 194, 245",
      softDot: "255, 255, 255",
      accent: "245, 166, 35",
      baseLineAlpha: 0.22,
      gridAlpha: 0.12
    };
  };

  const meshInstances = canvases.map((canvas, canvasIndex) => {
    const context = canvas.getContext("2d", { alpha: true });

    if (!context) {
      return null;
    }

    const density = clamp(Number.parseFloat(canvas.dataset.density || "1") || 1, 0.45, 2.2);
    const mode = canvas.dataset.mode || "mesh";
    const palette = drawPalette(canvas.dataset.tone || "dark");
    let width = 0;
    let height = 0;
    let dpr = 1;
    let points = [];
    let frame = 0;
    let animationFrame = 0;
    let visible = true;

    const createPoints = () => {
      if (mode === "blueprint" || mode === "topography") {
        points = [];
        return;
      }

      const count = Math.max(16, Math.min(118, Math.round((Math.sqrt(width * height) / 34) * density)));
      points = Array.from({ length: count }, (_, index) => {
        const phase = (index * 0.73 + canvasIndex * 1.9) % (Math.PI * 2);
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          accent: index % 17 === 0,
          phase
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createPoints();
      draw();
    };

    const drawConnection = (a, b, opacity) => {
      context.strokeStyle = `rgba(${palette.line}, ${opacity})`;
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(a.x, a.y);
      context.lineTo(b.x, b.y);
      context.stroke();
    };

    const drawBlueprint = () => {
      const gridSize = Math.max(38, Math.round(64 / density));
      const drift = shouldAnimate ? (frame * 0.18) % gridSize : 0;

      context.save();
      context.strokeStyle = `rgba(${palette.line}, ${palette.gridAlpha})`;
      context.lineWidth = 1;

      for (let x = -gridSize + drift; x <= width + gridSize; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = -gridSize + drift; y <= height + gridSize; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      context.globalAlpha = 0.44;
      context.beginPath();
      context.moveTo(width * 0.08, height * 0.68);
      context.lineTo(width * 0.36, height * 0.32);
      context.lineTo(width * 0.68, height * 0.42);
      context.lineTo(width * 0.92, height * 0.18);
      context.stroke();

      context.globalAlpha = 1;
      context.fillStyle = `rgba(${palette.accent}, 0.9)`;
      [0.08, 0.36, 0.68, 0.92].forEach((xRatio, index) => {
        const yRatio = [0.68, 0.32, 0.42, 0.18][index];
        context.beginPath();
        context.arc(width * xRatio, height * yRatio, index === 1 ? 4 : 2.6, 0, Math.PI * 2);
        context.fill();
      });

      context.restore();
    };

    const drawTopography = () => {
      context.save();
      context.strokeStyle = `rgba(${palette.line}, ${palette.gridAlpha + 0.04})`;
      context.lineWidth = 1;

      for (let ring = 0; ring < 7; ring += 1) {
        const radiusX = width * (0.12 + ring * 0.075);
        const radiusY = height * (0.08 + ring * 0.055);
        const offset = shouldAnimate ? Math.sin(frame * 0.012 + ring) * 8 : 0;

        context.beginPath();
        context.ellipse(width * 0.64 + offset, height * 0.46 - offset * 0.5, radiusX, radiusY, ring * 0.18, 0, Math.PI * 2);
        context.stroke();
      }

      context.fillStyle = `rgba(${palette.accent}, 0.82)`;
      context.beginPath();
      context.arc(width * 0.62, height * 0.46, 3, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    const drawPointerField = () => {
      if (!pointer.active || !points.length) {
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const localPointer = {
        x: pointer.x - rect.left,
        y: pointer.y - rect.top
      };

      if (
        localPointer.x < -40 ||
        localPointer.x > rect.width + 40 ||
        localPointer.y < -40 ||
        localPointer.y > rect.height + 40
      ) {
        return;
      }

      points.forEach((point) => {
        const distance = Math.hypot(point.x - localPointer.x, point.y - localPointer.y);
        if (distance < 210) {
          drawConnection(point, localPointer, (1 - distance / 210) * 0.34);
        }
      });

      context.fillStyle = `rgba(${palette.line}, 0.18)`;
      context.beginPath();
      context.arc(localPointer.x, localPointer.y, 18, 0, Math.PI * 2);
      context.fill();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      if (mode === "blueprint") {
        drawBlueprint();
        return;
      }

      if (mode === "topography") {
        drawTopography();
        return;
      }

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          const range = mode === "constellation" ? 126 : 156;

          if (distance < range) {
            const modeFactor = mode === "constellation" ? 0.12 : palette.baseLineAlpha;
            drawConnection(a, b, (1 - distance / range) * modeFactor);
          }
        }
      }

      drawPointerField();

      points.forEach((point) => {
        if (point.accent) {
          context.fillStyle = `rgba(${palette.accent}, 0.18)`;
          context.beginPath();
          context.arc(point.x, point.y, 9, 0, Math.PI * 2);
          context.fill();
          context.fillStyle = `rgba(${palette.accent}, 0.94)`;
          context.beginPath();
          context.arc(point.x, point.y, 2.7, 0, Math.PI * 2);
          context.fill();
          return;
        }

        const opacity = shouldAnimate ? 0.34 + 0.22 * Math.sin(frame * 0.02 + point.phase) : 0.46;
        context.fillStyle = `rgba(${point.accent ? palette.accent : palette.dot}, ${opacity})`;
        context.beginPath();
        context.arc(point.x, point.y, mode === "constellation" ? 1.85 : 1.45, 0, Math.PI * 2);
        context.fill();
      });
    };

    const start = () => {
      if (!shouldAnimate || !visible || animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    const tick = () => {
      if (!visible) {
        animationFrame = 0;
        return;
      }

      frame += 1;
      points.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > width) {
          point.vx *= -1;
        }
        if (point.y < 0 || point.y > height) {
          point.vy *= -1;
        }
      });
      draw();
      animationFrame = window.requestAnimationFrame(tick);
    };

    resize();

    start();

    return {
      resize,
      redraw: draw,
      setVisible(nextVisible) {
        visible = nextVisible;
        if (visible) {
          draw();
          start();
        } else {
          stop();
        }
      },
      stop() {
        stop();
      }
    };
  }).filter(Boolean);

  if (!meshInstances.length) {
    return;
  }

  if (shouldAnimate && "IntersectionObserver" in window) {
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const instanceIndex = canvases.indexOf(entry.target);
          const instance = meshInstances[instanceIndex];

          if (instance) {
            instance.setVisible(entry.isIntersecting);
          }
        });
      },
      {
        rootMargin: "160px 0px"
      }
    );

    canvases.forEach((canvas) => visibilityObserver.observe(canvas));
  }

  if (shouldAnimate) {
    let pointerFrame = 0;
    const redrawForPointer = () => {
      pointerFrame = 0;
      meshInstances.forEach((instance) => instance.redraw());
    };

    window.addEventListener(
      "pointermove",
      (event) => {
        pointer = {
          active: true,
          x: event.clientX,
          y: event.clientY
        };

        if (!pointerFrame) {
          pointerFrame = window.requestAnimationFrame(redrawForPointer);
        }
      },
      { passive: true }
    );

    window.addEventListener(
      "pointerleave",
      () => {
        pointer.active = false;
        meshInstances.forEach((instance) => instance.redraw());
      },
      { passive: true }
    );
  }

  const resizeAll = () => meshInstances.forEach((instance) => instance.resize());
  window.addEventListener("resize", resizeAll, { passive: true });
}

function setupGlobeLoader() {
  const loaders = [...document.querySelectorAll("[data-globe-loader]")];

  if (!loaders.length) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const staticMode = document.body.classList.contains("qa-static");
  const shouldAnimate = !reducedMotion && !staticMode;
  const icon = new Image();
  icon.decoding = "async";
  icon.src = "./assets/robson-ai-icon-v3-transparent-320.webp?v=20260627";

  const fallbackLandShapes = [
    [[-128, 50], [-110, 60], [-88, 56], [-64, 43], [-78, 21], [-104, 19], [-126, 34]],
    [[-84, 12], [-60, 7], [-47, -20], [-66, -52], [-79, -32], [-88, -6]],
    [[-12, 35], [18, 37], [34, 12], [26, -33], [4, -31], [-10, -5]],
    [[-9, 59], [22, 66], [58, 56], [92, 46], [123, 24], [105, 7], [62, 8], [28, 27], [5, 48]],
    [[112, -11], [146, -18], [151, -36], [126, -41], [112, -27]]
  ];
  const atlasPromise = window.fetch
    ? window.fetch("./assets/globe-loader/world-countries-lite.json?v=20260705", { cache: "force-cache" })
      .then((response) => (response.ok ? response.json() : null))
      .then((atlas) => (Array.isArray(atlas?.rings) && atlas.rings.length ? atlas.rings : null))
      .catch(() => null)
    : Promise.resolve(null);

  const projectPoint = (lon, lat, rotation, radius, cx, cy) => {
    const lambda = ((lon + rotation) * Math.PI) / 180;
    const phi = (lat * Math.PI) / 180;
    const depth = Math.cos(phi) * Math.cos(lambda);

    return {
      visible: depth > 0,
      x: cx + radius * Math.cos(phi) * Math.sin(lambda),
      y: cy - radius * Math.sin(phi) * 0.92
    };
  };

  loaders.forEach((loader) => {
    const canvas = loader.querySelector("canvas");
    const context = canvas?.getContext("2d", { alpha: true });

    if (!canvas || !context) {
      return;
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrame = 0;
    let visible = true;
    let landShapes = fallbackLandShapes;
    let detailedAtlasLoaded = false;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    };

    const strokePath = (points, strokeStyle, lineWidth, closePath = false, fillStyle = "") => {
      const visiblePoints = points.filter((point) => point.visible);

      if (visiblePoints.length < 2) {
        return;
      }

      context.beginPath();
      context.moveTo(visiblePoints[0].x, visiblePoints[0].y);
      visiblePoints.slice(1).forEach((point) => {
        context.lineTo(point.x, point.y);
      });

      if (closePath && visiblePoints.length >= 3) {
        context.closePath();
        if (fillStyle) {
          context.fillStyle = fillStyle;
          context.fill();
        }
      }

      context.strokeStyle = strokeStyle;
      context.lineWidth = lineWidth;
      context.stroke();
    };

    const drawGraticule = (rotation, radius, cx, cy) => {
      context.save();
      context.strokeStyle = "rgba(32, 34, 38, 0.2)";
      context.lineWidth = 0.85;

      for (let lat = -60; lat <= 60; lat += 20) {
        const points = [];
        for (let lon = -180; lon <= 180; lon += 5) {
          points.push(projectPoint(lon, lat, rotation, radius, cx, cy));
        }
        strokePath(points, "rgba(32, 34, 38, 0.16)", 0.75);
      }

      for (let lon = -160; lon <= 180; lon += 20) {
        const points = [];
        for (let lat = -78; lat <= 78; lat += 4) {
          points.push(projectPoint(lon, lat, rotation, radius, cx, cy));
        }
        strokePath(points, "rgba(32, 34, 38, 0.14)", 0.75);
      }

      context.restore();
    };

    const drawLand = (rotation, radius, cx, cy) => {
      context.save();
      landShapes.forEach((shape) => {
        const points = shape.map(([lon, lat]) => projectPoint(lon, lat, rotation, radius, cx, cy));
        const visibleRatio = points.filter((point) => point.visible).length / points.length;

        if (visibleRatio < (detailedAtlasLoaded ? 0.24 : 0.55)) {
          return;
        }

        strokePath(
          points,
          detailedAtlasLoaded ? "rgba(244, 242, 237, 0.26)" : "rgba(22, 24, 29, 0.72)",
          detailedAtlasLoaded ? 0.38 : 1.1,
          true,
          detailedAtlasLoaded ? "rgba(35, 33, 28, 0.78)" : "rgba(31, 34, 34, 0.34)"
        );
      });
      context.restore();
    };

    const drawIcon = (cx, cy, size) => {
      context.save();
      context.beginPath();
      context.arc(cx, cy, size * 0.56, 0, Math.PI * 2);
      context.fillStyle = "rgba(246, 244, 238, 0.82)";
      context.fill();

      if (icon.complete && icon.naturalWidth > 0) {
        context.drawImage(icon, cx - size * 0.55, cy - size * 0.55, size * 1.1, size * 1.1);
      } else {
        context.fillStyle = "#0b1a4a";
        context.font = `700 ${Math.round(size * 0.54)}px system-ui, sans-serif`;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("R", cx, cy + size * 0.04);
      }

      context.restore();
    };

    const drawOrbit = (cx, cy, radius, t) => {
      const rings = [
        { r: radius * 1.28, start: -0.42, span: 0.9, speed: 0.72, width: 3.2, stroke: "rgba(18, 99, 182, 0.92)" },
        { r: radius * 1.55, start: 2.25, span: 1.45, speed: -0.36, width: 2.4, stroke: "rgba(159, 176, 203, 0.92)" },
        { r: radius * 1.72, start: 5.08, span: 0.72, speed: 0.46, width: 2.8, stroke: "rgba(245, 166, 35, 0.86)" },
        { r: radius * 1.76, start: 0.08, span: 0.54, speed: -0.28, width: 2.2, stroke: "rgba(126, 156, 202, 0.82)" }
      ];

      context.save();
      context.lineCap = "round";
      rings.forEach((ring) => {
        context.beginPath();
        const start = ring.start + t * ring.speed;
        context.arc(cx, cy, ring.r, start, start + ring.span);
        context.lineWidth = ring.width;
        context.strokeStyle = ring.stroke;
        context.stroke();
      });

      [
        { angle: 2.9 + t * 0.42, distance: 1.56, color: "rgba(18, 99, 182, 0.96)", size: 2.5 },
        { angle: 3.65 - t * 0.34, distance: 1.48, color: "rgba(18, 99, 182, 0.82)", size: 1.8 },
        { angle: 5.08 + t * 0.44, distance: 1.56, color: "rgba(245, 166, 35, 0.92)", size: 2.3 },
        { angle: 1.55 - t * 0.26, distance: 1.82, color: "rgba(159, 176, 203, 0.88)", size: 1.4 },
        { angle: 6.08 + t * 0.5, distance: 1.72, color: "rgba(245, 166, 35, 0.82)", size: 1.4 }
      ].forEach((dot) => {
        const dotX = cx + Math.cos(dot.angle) * radius * dot.distance;
        const dotY = cy + Math.sin(dot.angle) * radius * dot.distance;
        context.beginPath();
        context.arc(dotX, dotY, dot.size, 0, Math.PI * 2);
        context.fillStyle = dot.color;
        context.fill();
      });

      const activeAngle = t * 1.28 + 2.95;
      const activeX = cx + Math.cos(activeAngle) * radius * 1.34;
      const activeY = cy + Math.sin(activeAngle) * radius * 1.34;
      const gradient = context.createRadialGradient(activeX, activeY, 0, activeX, activeY, radius * 0.12);
      gradient.addColorStop(0, "rgba(255, 210, 145, 0.95)");
      gradient.addColorStop(0.45, "rgba(245, 166, 35, 0.86)");
      gradient.addColorStop(1, "rgba(245, 166, 35, 0)");
      context.beginPath();
      context.arc(activeX, activeY, radius * 0.12, 0, Math.PI * 2);
      context.fillStyle = gradient;
      context.fill();
      context.restore();
    };

    const draw = (now = 0) => {
      context.clearRect(0, 0, width, height);

      if (width < 4 || height < 4) {
        return;
      }

      const t = shouldAnimate ? now * 0.001 : 1.2;
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.31;
      const rotation = (t * 28) % 360;

      context.save();
      context.globalAlpha = 0.98;
      drawOrbit(cx, cy, radius, t);
      context.restore();

      context.save();
      const globeGradient = context.createRadialGradient(cx - radius * 0.34, cy - radius * 0.42, radius * 0.1, cx, cy, radius);
      globeGradient.addColorStop(0, "rgba(255, 255, 255, 0.98)");
      globeGradient.addColorStop(0.64, "rgba(238, 238, 232, 0.96)");
      globeGradient.addColorStop(1, "rgba(205, 207, 199, 0.9)");
      context.beginPath();
      context.arc(cx, cy, radius, 0, Math.PI * 2);
      context.fillStyle = globeGradient;
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = "rgba(18, 20, 24, 0.72)";
      context.stroke();

      context.save();
      context.beginPath();
      context.arc(cx, cy, radius - 1, 0, Math.PI * 2);
      context.clip();
      drawGraticule(rotation, radius, cx, cy);
      drawLand(rotation, radius, cx, cy);
      context.restore();

      context.beginPath();
      context.arc(cx, cy, radius, 0, Math.PI * 2);
      context.lineWidth = 1.2;
      context.strokeStyle = "rgba(18, 20, 24, 0.42)";
      context.stroke();

      drawIcon(cx, cy, radius * 1.18);
      context.restore();
    };

    const stop = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    const tick = (now) => {
      if (!visible) {
        animationFrame = 0;
        return;
      }

      draw(now);
      animationFrame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (!shouldAnimate || !visible || animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(tick);
    };

    icon.addEventListener("load", () => draw(performance.now()), { once: true });
    atlasPromise.then((rings) => {
      if (!rings) {
        return;
      }

      landShapes = rings;
      detailedAtlasLoaded = true;
      draw(performance.now());
    });
    resize();
    start();
    window.addEventListener("resize", resize, { passive: true });

    if (shouldAnimate && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          visible = Boolean(entry?.isIntersecting);
          if (visible) {
            draw(performance.now());
            start();
          } else {
            stop();
          }
        },
        {
          rootMargin: "160px 0px"
        }
      );
      observer.observe(loader);
    }
  });
}

function setupAmbientMotion() {
  if (document.body.classList.contains("qa-static")) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");

  if (reducedMotion.matches || !finePointer.matches) {
    return;
  }

  const root = document.documentElement;
  const depthSurfaces = document.querySelectorAll(
    ".home-signal-board, .workflow-finder-board, .operations-queue-card, .operations-decision-rail article, .buildscan-window, .home-belief-panel, .home-contact-panel, .analyst-summary-card, .home-problem-card, .home-workflow-step, .home-contact-routes article, .analyst-core-card, .analyst-flow-card, .analyst-fit-card, .page-card, .fit-card, .zip-product-card, .zip-price-card, .zip-app-panel, .zip-buildscan-window, .zip-trust-grid article, .zip-boundary-strip article, .zip-contact-routes article"
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
