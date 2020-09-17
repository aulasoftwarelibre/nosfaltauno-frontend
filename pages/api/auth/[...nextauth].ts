import gravatar from "gravatar";
import NextAuth, { InitOptions } from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next";

const env = process.env.NODE_ENV;
const dev = env !== "production";

const options = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
} as InitOptions;

if (dev) {
  options.providers = [
    ...options.providers,
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Clave", type: "password" },
      },
      authorize: async (_credentials: {
        username: string;
        password: string;
      }) => {
        if (_credentials.username.indexOf("@") < 0) {
          return Promise.resolve(null);
        }

        const user = {
          name: _credentials.username.split("@")[0],
          email: _credentials.username,
          image: gravatar.url(_credentials.username),
        };

        return Promise.resolve(user);
      },
    }),
  ];
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options);
