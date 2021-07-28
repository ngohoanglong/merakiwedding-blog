module.exports = {
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: [
      'merakiweddingplanner.com',
      'strapi.merakiweddingplanner.com',
      'res.cloudinary.com'
    ],
    deviceSizes: [640, 828, 1200, 1920],
  },
  env: {
    GITHUB_CLIENT_ID:
      process.env.GITHUB_CLIENT_ID,
    REPO_FULL_NAME:
      process.env.REPO_FULL_NAME,
    BASE_BRANCH:
      process.env.BASE_BRANCH,
    STRAPI_URL: process.env.STRAPI_URL,
    HOST: process.env.HOST
  },
}
