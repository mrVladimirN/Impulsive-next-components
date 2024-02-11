/* eslint-disable consistent-return */
/* eslint-disable no-console */

'use client';

import { ReactNode, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { onSnapshot } from 'firebase/firestore';
import { subscriptionRef } from '@/lib/converter/subscription';
import { useSubscriptionStore } from 'store/firebase-store';
import Subscription from '@/types/subscription';

type SubscriptionProviderType = {
  children: ReactNode;
};
const SubscriptionProvider = ({ children }: SubscriptionProviderType) => {
  const { data: session } = useSession();
  const setSubscription = useSubscriptionStore(
    (state) => state.setSubscription
  );
  useEffect(() => {
    if (!session) return;

    return onSnapshot(
      subscriptionRef(session?.user.id),
      (snapshot) => {
        if (snapshot.empty) {
          console.log('User has NO subscription');
          setSubscription(null);
        } else {
          console.log('User has subscription');
          setSubscription(snapshot.docs[0]?.data() as Subscription);
        }
      },
      (error) => {
        console.log('Error getting document', error);
      }
    );
  }, [session, setSubscription]);
  return <>{children}</>;
};

export default SubscriptionProvider;
