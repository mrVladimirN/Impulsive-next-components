/* eslint-disable import/no-mutable-exports */
import { initFirestore } from '@auth/firebase-adapter';
import admin from 'firebase-admin';
import { App } from 'firebase-admin/app';
import { Firestore } from 'firebase-admin/firestore';
import { Auth } from 'firebase-admin/lib/auth/auth';

let app: App | undefined;
if (!admin.apps.length) {
  app = process.env.FIREBASE_PRIVATE_KEY
    ? admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID
          ? process.env.FIREBASE_PROJECT_ID
          : 'fake',
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL
          ? process.env.FIREBASE_CLIENT_EMAIL
          : 'fake',
        privateKey: process.env.FIREBASE_PRIVATE_KEY
          ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
          : undefined
      })
    })
    : undefined;
}
const adminDb: Firestore | undefined = process.env.FIREBASE_PRIVATE_KEY
  ? initFirestore({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID
        ? process.env.FIREBASE_PROJECT_ID
        : 'fake',
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL
        ? process.env.FIREBASE_CLIENT_EMAIL
        : 'fake',
      privateKey: process.env.FIREBASE_PRIVATE_KEY
        ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
        : undefined
    })
  })
  : undefined;
const adminAuth: Auth = admin.auth(app);

export { adminAuth, adminDb };
