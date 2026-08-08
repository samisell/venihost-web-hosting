import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { validateLogin } from "@/lib/whmcs/auth";
import { getClientDetails } from "@/lib/whmcs/profile";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "WHMCS Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        try {
          // 1. Validate login against WHMCS
          const res = await validateLogin(credentials.email as string, credentials.password as string);
          
          if (res.result === "success" && res.userid) {
            // 2. Fetch extra profile details to store in session
            const details = await getClientDetails(res.userid);
            
            return {
              id: res.userid.toString(),
              email: credentials.email as string,
              name: `${details.client?.firstname || ""} ${details.client?.lastname || ""}`.trim(),
              // You can store whmcs_password_hash or other tokens here if necessary
            };
          }
          return null;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
});
