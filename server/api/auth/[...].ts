import Credentials from "@auth/core/providers/credentials";
import type { AuthConfig } from "@auth/core/types"
import { NuxtAuthHandler } from "#auth";
import AuthService from "~/modules/identity_access/services/authService";

const runtimeConfig = useRuntimeConfig()

export const authOptions: AuthConfig = {
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token}) {
      if (token?.user) {
        // @ts-ignore
        session.user = token.user;
      }
      return session;
    }
  },
  secret: runtimeConfig.authJs.secret,
  providers: [
      Credentials({
        name: "Credentials",
        credentials: {
          email: {
            label: "Email",
            type: "text",
          },
          password: {
            label: "Password",
            type: "password",
          },
        },
        async authorize(credentials) {
          const { token } = await AuthService.login(
            credentials!.email as string,
            credentials!.password as string,
          )
          if (token)
            return {
              email: credentials!.email,
              token: token
            } as any
          return null;
        }
      })
  ]
}

export default NuxtAuthHandler(authOptions, runtimeConfig)