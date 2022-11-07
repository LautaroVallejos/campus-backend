module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_5iTSnzowlsi3I5fdfbZAaqlIzWVD/2ykdNBQ70z",
        apiToken: "lDrM0jUC2GvWOFy1JRaitJBV",
        appFilter: "campus-backend",
        // teamFilter: "your-team-id-on-vercel",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });