'use client';

import { auth } from '@/firebase/client';
import { Auth, signInWithCustomToken } from 'firebase/auth';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { ReactNode, useEffect } from 'react';

type FirebaseAuthProviderType = {
  children: ReactNode;
};

const syncFirebaseAuth = async (session: Session) => {
  if (session && session.firebaseToken) {
    try {
      await signInWithCustomToken(auth as Auth, session.firebaseToken);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error signing in with custom token:', error);
    }
  } else {
    auth?.signOut();
  }
};
const FirebaseAuthProvider = ({ children }: FirebaseAuthProviderType) => {
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) return;
    syncFirebaseAuth(session);
  }, [session]);
  return <>{children}</>;
};

export default FirebaseAuthProvider;
