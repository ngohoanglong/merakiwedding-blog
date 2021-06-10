module.exports = {
    images: {
        domains: ["merakiweddingplanner.com", "strapi.merakiweddingplanner.com"],
    },
    env: {
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        REPO_FULL_NAME: process.env.REPO_FULL_NAME,
        BASE_BRANCH: process.env.BASE_BRANCH,
        STRAPI_URL: process.env.STRAPI_URL,
    },
};
