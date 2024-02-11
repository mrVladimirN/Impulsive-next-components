/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */

'use client';

import { db } from '@/firebase/client';
import {
  Firestore, addDoc, collection, onSnapshot
} from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { useSubscriptionStore } from 'store/firebase-store';
import LoadingSpinner from './loading-spinner';
import ManageAccountButton from './manage-account-button';

const CheckoutButton = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const subscription = useSubscriptionStore((state) => state.subscription);
  const isLoadingSubscription = subscription === undefined;
  const isSubscribed = subscription?.status === 'active' && subscription.role === 'pro';
  const createCheckoutSession = async () => {
    if (!session?.user.id) return;

    // push document into firestore db
    setLoading(true);

    // should add extension in firebase for stripe
    const docRef = await addDoc(
      collection(
        db as Firestore,
        'customers',
        session.user.id,
        'checkout_sessions'
      ),
      {
        price: 'price_100998KDjTc6FlwiIL3eBoYQ',
        success_url: window.location.origin,
        cancel_url: window.location.origin
      }
    );
    // ...stripe extension on firebase will create a checkout session
    return onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;
      if (error) {
        alert(`An error occured: ${error.message}`);
      }
      setLoading(false);
      if (url) {
        window.location.assign(url);
        setLoading(false);
      }
    });
  };
  return (
    <div className="flex flex-col space-y-2">
      <div
        className="
mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visibile:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80
"
      >
        {isSubscribed ? (
          <ManageAccountButton />
        ) : isLoadingSubscription || loading ? (
          <LoadingSpinner />
        ) : (
          <button onClick={() => createCheckoutSession()}>Sign Up</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutButton;
