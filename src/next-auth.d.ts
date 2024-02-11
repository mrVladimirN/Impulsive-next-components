import { DefaultSession } from 'next-auth';
/* Extending on the existing module */
declare module 'next-auth' {
  interface Session {
    firebaseToken?: string,
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}
