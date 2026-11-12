/**
 * Google Analytics 4. Does nothing until `ANALYTICS.gaId` in
 * src/content/pages.js holds a Measurement ID (G-XXXXXXXXXX).
 *
 * One GA4 property covers every site on alecson12.github.io: the landing
 * page and the three portfolios all load the same ID, and the dashboard
 * tells them apart by page path. Outbound clicks (the Portfolio buttons,
 * the social links) are counted by GA4's enhanced measurement.
 */
export function initAnalytics(id) {
  if (!id || !/^G-[A-Z0-9]+$/i.test(id) || window.gtag) return
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(s)
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', id)
}
