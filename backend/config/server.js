module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://api.election-tammuz.org',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '01d000485b2d9a265eb8ad4b9123cc2d'),
    },
  },
});
