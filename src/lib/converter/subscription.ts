import { db } from '@/firebase/client';
import Subscription from '@/types/subscription';
import {
  DocumentData,
  Firestore,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection
} from 'firebase/firestore';

const subscriptionConverter: FirestoreDataConverter<Subscription> = {
  toFirestore: (subscription: Subscription): DocumentData => ({
    ...subscription
  }),
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Subscription => {
    const data = snapshot.data(options);
    const sub: Subscription = {
      id: snapshot.id,
      cancel_at_period_end: data.cancel_at_period_end,
      created: data.created,
      current_period_start: data.current_period_start,
      items: data.items,
      latest_invoice: data.latest_invoice,
      metadata: data.metadata,
      payment_method: data.payment_method,
      price: data.price,
      prices: data.prices,
      product: data.product,
      quantity: data.quantity,
      status: data.status,
      stripeLink: data.stripeLink,
      cancel_at: data.cancel_at,
      canceled_at: data.canceled_at,
      current_period_end: data.current_period_end,
      ended_at: data.ended_at,
      trial_start: data.trial_start,
      trial_end: data.trial_end,
      role: data.role
    };
    return sub;
  }
};

const subscriptionRef = (userId: string) => collection(
    db as Firestore,
    'customers',
    userId,
    'subscriptions'
).withConverter(subscriptionConverter);

export { subscriptionRef, subscriptionConverter };
