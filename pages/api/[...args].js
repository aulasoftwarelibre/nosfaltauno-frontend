import { createProxyMiddleware } from "http-proxy-middleware";

const env = process.env.NODE_ENV;
const dev = env !== "production";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const apiProxy =
  dev &&
  createProxyMiddleware({
    target: process.env.API_ENDPOINT,
    changeOrigin: true,
    pathRewrite: { [`^/api`]: "" },
    secure: false,
  });

export default function (req, res) {
  if (!dev) {
    return res.send(404);
  }

  apiProxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result;
    }

    throw new Error(
      `Request '${req.url}' is not proxied! We should never reach here!`
    );
  });
}
