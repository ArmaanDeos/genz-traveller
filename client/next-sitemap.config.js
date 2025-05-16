// next-sitemap.config.js
module.exports = {
  siteUrl: "https://genztraveller.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin", "/api/*"],
};
