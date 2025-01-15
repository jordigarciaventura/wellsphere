import { route } from "@/config/site";
import { accounts, sessions, users, verificationTokens } from "@/db/authSchema";
import { db } from "@/db/index.ts";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { type DefaultSession, type NextAuthOptions } from "next-auth";
import { type Adapter } from "next-auth/adapters";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    id: string;
    user: {
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: {
        params: {
          scope: "read:user user:email notifications public_repo",
        },
      },
      allowDangerousEmailAccountLinking: true,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          scope: "openid email profile",
        },
      },
      allowDangerousEmailAccountLinking: true,
    }),

    // CredentialsProvider({
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "email",
    //       placeholder: "email@email.com",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },
    //   // Authorize function to validate credentials
    //   // returns a user object if successful of the db
    //   // returns null if not then an error will be displayed
    //   async authorize(credentials) {
    //     // Ensure that there is a credentials object

    //     if (!credentials) return null;

    //     const user = await getUserByEmail(credentials.email);
    //     if (user && user[0]?.password === credentials.password) {
    //       return user[0];
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
  ],
  callbacks: {
    jwt({ token, account, profile }: any) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile.id;
      }
      return token;
    },
    session({ session, token }: any) {
      session.accessToken = token.accessToken;
      session.id = token.sub;
      return session;
    },
  },
  pages: {
    signIn: route.login,
    newUser: route.welcome,
  },
  session: {
    strategy: "jwt",
  },
};
