/* eslint-disable import/no-mutable-exports */
import { initFirestore } from '@auth/firebase-adapter';
import admin from 'firebase-admin';
import { App } from 'firebase-admin/app';
import { Firestore } from 'firebase-admin/firestore';
import { Auth } from 'firebase-admin/lib/auth/auth';

let app: App | undefined;
if (!admin.apps.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID || 'test',
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL || 'test',
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n') || 'test'
    })
  });
}
const adminDb: Firestore = initFirestore({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID || 'test',
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL || 'test',
    privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n') || 'test'
  })
});
const adminAuth: Auth = admin.auth(app);

export { adminAuth, adminDb };
