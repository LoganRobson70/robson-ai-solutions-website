const workflowMailto = "mailto:hello@robsonai.co.uk?subject=Building%20Analyst%20workflow&body=Hi%20Wayne%2C%0A%0AI%20would%20like%20to%20discuss%20a%20Building%20Analyst%20workflow.%0A%0AOrganisation%20or%20role%3A%0AWorkflow%20or%20problem%3A%0AUseful%20context%3A%0A%0AThanks%2C";

const current = (page, candidate) => page === candidate ? ' aria-current="page"' : "";

export function siteHeader(page) {
  return `    <header class="site-header studio-header">
      <div class="container studio-header-inner">
        <a class="studio-wordmark" href="/" aria-label="Robson AI Solutions home">
          <img class="studio-wordmark-icon" src="/assets/robson-ai-icon-v3-transparent-320.webp?v=20260627" width="320" height="320" alt="" decoding="async" fetchpriority="high">
          <span class="studio-wordmark-text"><strong>Robson AI</strong><span>Solutions</span></span>
        </a>
        <button class="studio-nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" data-nav-toggle>Menu</button>
        <nav class="site-nav studio-nav" id="primary-navigation" aria-label="Primary" data-primary-nav>
          <a href="/#products" data-analytics-id="nav-products">Products</a>
          <a href="/who-its-for"${current(page, "who")} data-analytics-id="nav-who-its-for">Who it's for</a>
          <a href="/building-analyst"${current(page, "building-analyst")} data-analytics-id="nav-building-analyst">Building Analyst</a>
          <a href="/#about" data-analytics-id="nav-about">About</a>
          <a class="studio-nav-mobile-cta" href="${workflowMailto}" data-analytics-id="nav-mobile-building-analyst" data-cta-location="mobile-menu">Discuss a Building Analyst workflow <span aria-hidden="true">&rarr;</span></a>
        </nav>
        <div class="studio-header-actions">
          <a class="studio-header-cta" href="${workflowMailto}" data-analytics-id="nav-building-analyst-workflow" data-cta-location="header">Discuss a Building Analyst workflow <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </header>`;
}

export function siteFooter() {
  return `    <footer class="site-footer studio-footer">
      <div class="container footer-grid studio-footer-grid">
        <div class="footer-brand-block">
          <a class="studio-wordmark studio-footer-wordmark" href="/" aria-label="Robson AI Solutions home">
            <img class="studio-wordmark-icon" src="/assets/robson-ai-icon-v3-transparent-320.webp?v=20260627" width="320" height="320" alt="" loading="lazy" decoding="async">
            <span class="studio-wordmark-text"><strong>Robson AI</strong><span>Solutions</span></span>
          </a>
          <p class="footer-copy">Surveying-led software for connected evidence, professional review and clearer building decisions.</p>
        </div>
        <div class="footer-nav-group">
          <p class="footer-heading">Explore</p>
          <div class="footer-links">
            <a href="/">Home</a>
            <a href="/#products">Products</a>
            <a href="/who-its-for">Who it's for</a>
            <a href="/building-analyst">Building Analyst</a>
            <a href="/#buildscan-proof">BuildScan proof</a>
            <a href="/#about">About</a>
            <a href="/privacy">Privacy Notice</a>
          </div>
        </div>
        <div class="footer-nav-group">
          <p class="footer-heading">Contact</p>
          <div class="footer-links">
            <a href="${workflowMailto}" data-analytics-id="footer-building-analyst-workflow" data-cta-location="footer">Discuss a Building Analyst workflow</a>
            <a href="mailto:hello@robsonai.co.uk" data-analytics-id="footer-mailto-link" data-cta-location="footer">hello@robsonai.co.uk</a>
            <button class="footer-link-button" type="button" data-open-consent>Privacy and analytics</button>
          </div>
        </div>
      </div>
      <div class="container footer-meta">
        <p>&copy; 2026 Robson AI Solutions. Early-stage product site.</p>
        <p>Building Analyst is in development. BuildScan is working product proof.</p>
      </div>
    </footer>`;
}
