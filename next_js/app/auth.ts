// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET!,
  providers: [
    GitHub({
      clientId: process.env.AUTH_CLIENT_ID!, // <-- dùng AUTH_GITHUB_ID
      clientSecret: process.env.AUTH_GITHUB_SECRET!, // <-- dùng AUTH_GITHUB_SECRET
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user) (session.user as any).id = token.sub;
      return session;
    },
  },
});

export const { GET, POST } = handlers;
