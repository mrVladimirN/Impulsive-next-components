/* eslint-disable import/no-mutable-exports */

'use client';

import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { Auth, connectAuthEmulator, getAuth } from 'firebase/auth';
import { getFunctions, Functions } from 'firebase/functions';
import { Firestore, getFirestore } from 'firebase/firestore';
import firebaseConfig from './config';
// Get firebase config from firebase project settings
const currentApps = getApps();

let auth: Auth | undefined;
let db: Firestore | undefined;
let functions: Functions | undefined;
if (currentApps.length <= 0) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  functions = getFunctions(app);
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
  db = getFirestore(currentApps[0] as FirebaseApp);
  functions = getFunctions(currentApps[0]);
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

export { auth, db, functions };
