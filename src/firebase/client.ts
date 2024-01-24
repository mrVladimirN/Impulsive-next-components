'use client';

import { getApps, initializeApp } from 'firebase/app';
import { Auth, connectAuthEmulator, getAuth } from 'firebase/auth';
import firebaseConfig from './config';

// Get firebase config from firebase project settings
const currentApps = getApps();

// eslint-disable-next-line import/no-mutable-exports
let auth: Auth | undefined;

if (currentApps.length <= 0) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  if (
    process.env.NEXT_PUBLIC_FIREBASE_APP_ENV === 'emulator'
    && process.env.NEXT_PUBLIC_EMULATOR_AUTH_PATH
  ) {
    connectAuthEmulator(
      auth,
      `http://${process.env.NEXT_PUBLIC_EMULATOR_AUTH_PATH}`
    );
  }
} else {
  auth = getAuth(currentApps[0]);
  if (
    process.env.NEXT_PUBLIC_FIREBASE_APP_ENV === 'emulator'
    && process.env.NEXT_PUBLIC_EMULATOR_AUTH_PATH
  ) {
    connectAuthEmulator(
      auth,
      `http://${process.env.NEXT_PUBLIC_EMULATOR_AUTH_PATH}`
    );
  }
}

export default auth;
