import { Auth } from '@auth/core';
import { parseString } from 'set-cookie-parser';
import Twitch from '@auth/core/providers/twitch';

const defineConfig = (config) => {
  config.prefix ??= "/api/auth";
  return config;
};

const authConfig = defineConfig({
  providers: [Twitch({
    clientId: process.env.TWITCH_CLIENT_ID,
    clientSecret: process.env.TWITCH_CLIENT_SECRET
  })]
});

const actions = [
  "providers",
  "session",
  "csrf",
  "signin",
  "signout",
  "callback",
  "verify-request",
  "error"
];
function AstroAuthHandler(prefix, options = authConfig) {
  return async ({ cookies, request }) => {
    const url = new URL(request.url);
    const action = url.pathname.slice(prefix.length + 1).split("/")[0];
    if (!actions.includes(action) || !url.pathname.startsWith(prefix + "/"))
      return;
    const res = await Auth(request, options);
    if (["callback", "signin", "signout"].includes(action)) {
      res.headers.getSetCookie().forEach((cookie) => {
        const { name, value, ...options2 } = parseString(cookie);
        cookies.set(name, value, options2);
      });
      res.headers.delete("Set-Cookie");
    }
    return res;
  };
}
function AstroAuth(options = authConfig) {
  const { AUTH_SECRET, AUTH_TRUST_HOST, VERCEL, NODE_ENV } = Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { AUTH_SECRET: process.env.AUTH_SECRET, AUTH_TRUST_HOST: true, NODE: process.env.NODE, _: process.env._, NODE_ENV: process.env.NODE_ENV });
  options.secret ??= AUTH_SECRET;
  options.trustHost ??= !!(AUTH_TRUST_HOST ?? VERCEL ?? NODE_ENV !== "production");
  const { prefix = "/api/auth", ...authOptions } = options;
  const handler = AstroAuthHandler(prefix, authOptions);
  return {
    async GET(context) {
      return await handler(context);
    },
    async POST(context) {
      return await handler(context);
    }
  };
}
async function getSession(req, options = authConfig) {
  options.secret ??= process.env.AUTH_SECRET;
  options.trustHost ??= true;
  const url = new URL(`${options.prefix}/session`, req.url);
  const response = await Auth(new Request(url, { headers: req.headers }), options);
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length)
    return null;
  if (status === 200)
    return data;
  throw new Error(data.message);
}

const { GET, POST } = AstroAuth();

const ____auth_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

export { ____auth_ as _, getSession as g };
