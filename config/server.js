// const strapi = require('@strapi/strapi');

// strapi(/* {...} */).start();

module.exports = ({ env }) => ({
  host: env('HOST', 'https://campus-backend.vercel.app/'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
