import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirestoreAdapter } from '@auth/firebase-adapter';
import { adminAuth, adminDb } from '@/firebase/server';
import { Adapter } from 'next-auth/adapters';

const authOptions: NextAuthOptions = {
  // Who we are we given the auth providers
  providers: [
    // Take them from firebase/auth website
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    session: async ({ session, token }) => {
      const newSession = session;
      if (session?.user) {
        if (token.sub) {
          newSession.user.id = token.sub;
          const firebaseToken = await adminAuth.createCustomToken(token.sub);
          newSession.firebaseToken = firebaseToken;
        }
      }
      return newSession;
    },
    jwt: async ({ user, token }) => {
      const newToken = token;
      if (user) {
        newToken.sub = user.id;
      }
      return newToken;
    }
  },
  session: {
    strategy: 'jwt'
  },
  adapter: FirestoreAdapter(adminDb) as Adapter
} satisfies NextAuthOptions;

export default authOptions;
