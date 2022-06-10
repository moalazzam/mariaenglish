module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  url: env("PUBLIC_ADMIN_URL", "/"),
  serveAdminPanel: env.bool("SERVE_ADMIN", false),
});
