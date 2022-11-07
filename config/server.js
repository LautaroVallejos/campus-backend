// const strapi = require('@strapi/strapi');

// strapi(/* {...} */).start();

module.exports = ({ env }) => ({
  host: env('APP_HOST', '0.0.0.0'),
  port: env.int('NODE_PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('URL', 'https://campus-backend.vercel.app/')
});
