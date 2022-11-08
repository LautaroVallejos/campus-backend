module.exports = ({ env }) => ({
  host: env('HOST', '3.19.211.126'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('URL', 'ec2-3-19-211-126.us-east-2.compute.amazonaws.com')
});
