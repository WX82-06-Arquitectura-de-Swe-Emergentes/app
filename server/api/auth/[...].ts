import Credentials from "@auth/core/providers/credentials";
import type { AuthConfig } from "@auth/core/types"
import { NuxtAuthHandler } from "#auth";

const runtimeConfig = useRuntimeConfig()

export const authOptions: AuthConfig = {
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt",
  },
  secret: runtimeConfig.authJs.secret,
  providers: [
      Credentials({
        name: "Credentials",
        credentials: {
          username: {
            label: "Username",
            type: "text",
          },
          password: {
            label: "Password",
            type: "password",
          },
        }
      })
  ]
}

export default NuxtAuthHandler(authOptions, runtimeConfig)