export const config = () => ({
  client: {
    id: process.env.OAUTH_CLIENT_ID,
    secret: process.env.OAUTH_CLIENT_SECRET,
  },
  auth: {
    tokenHost: "https://github.com",
    tokenPath: "/oauth/token",
    authorizePath: "/oauth/authorize",
  },
});
