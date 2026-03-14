/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://rozgarhub.pk',
  generateRobotsTxt: true,
  exclude: ['/admin', '/admin/*', '/dashboard', '/dashboard/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/dashboard', '/api'],
      },
    ],
  },
}
