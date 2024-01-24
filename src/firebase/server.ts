/* eslint-disable import/no-mutable-exports */
import {
  App,
  ServiceAccount,
  cert,
  getApps,
  initializeApp
} from 'firebase-admin/app';
import { Firestore, getFirestore } from 'firebase-admin/firestore';
import { Auth, getAuth } from 'firebase-admin/auth';
import serviceAccount from './serviceAccount.json';

let firestore: Firestore | undefined;
let auth: Auth | undefined;
let app: App | undefined;
const currentApps: App[] = getApps();
if (currentApps.length <= 0) {
  if (process.env.NEXT_PUBLIC_FIREBASE_APP_ENV === 'emulator') {
    process.env.FIRESTORE_EMULATOR_HOST = process.env.NEXT_PUBLIC_EMULATOR_FIRESTORE_PATH;
    process.env.FIREBASE_AUTH_EMULATOR_HOST = process.env.NEXT_PUBLIC_EMULATOR_AUTH_PATH;
  }
  app = initializeApp({
    credential: cert(serviceAccount as ServiceAccount)
  });
  firestore = getFirestore(app);
  auth = getAuth(app);
} else {
  firestore = getFirestore(currentApps[0] as App);
  auth = getAuth(currentApps[0]);
}

export { firestore, auth };
