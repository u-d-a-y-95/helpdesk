import { http } from "@/util/http";
import NextAuth, { Awaitable, RequestInternal } from "next-auth";
import Credentials from "next-auth/providers/credentials";

type User = {
  token: string;
};

const handler = NextAuth({
  providers: [
    Credentials({
      name: "credential",
      credentials: {},
      authorize: async function (
        credentials: Record<string | number | symbol, string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Promise<User | null> {
        if (!credentials) return null;

        const res = await http.post("/auth/signin", {
          email: credentials.email,
          password: credentials.password,
        });
        if (res.statusCode === 401) return null;
        return res;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      console.log(token, user);
      return {
        signedToken: user.token,
      };
    },
  },
  jwt: {
    async encode(params) {
      return params.token.signedToken;
    },
  },
});

export { handler as GET, handler as POST };
