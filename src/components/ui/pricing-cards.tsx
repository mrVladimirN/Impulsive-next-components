import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import CheckoutButton from './check-out-button';

type PrincingCardsProps = {
  redirect: boolean;
};

type PrincingCardProps = PrincingCardsProps & {
  name: string;
  id: string;
  href: string;
  priceMonthly: string | null;
  description: string;
  features: string[];
};

const tiers = [
  {
    name: 'Starter',
    id: 'start_Id',
    href: '#',
    priceMonthly: null,
    description: 'Get chatting right away with anyone',
    features: [
      '20 Message Chat Limit in Chats',
      '2 Participant limit in Chat',
      '3 Chat Rooms limit',
      'Supports 2 languages',
      '48-hour support response time'
    ]
  },
  {
    name: 'Pro',
    id: 'si_OnlcsLNQYbMVzV',
    href: '#',
    priceMonthly: '$5.99',
    description: 'Unlock the Full Potential with Pro!',
    features: [
      'Unlimited Chat Limit in Chats',
      'Unlimited Participants in Chat',
      'Unlimited Chat Rooms ',
      'Supports 10 languages'
    ]
  }
];
const PricingCard = ({
  name,
  id,
  priceMonthly,
  description,
  redirect,
  features
}: PrincingCardProps) => (
  <div
    key={id}
    className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
  >
    <div>
      <h3
        id={id + name}
        className="text-base font-semibold leading-7 text-indigo-600"
      >
        {name}
      </h3>
      <div className="mt-4 flex items-baseline gap-x-2">
        {priceMonthly ? (
          <>
            <span className="text-5xl font-bold tracking-tight text-gray-900">
              {priceMonthly}
            </span>
            <span className="text-base font-semibold leading-7 text-gray-600">
              /month
            </span>
          </>
        ) : (
          <span className="text-5xl font-bold tracking-tight text-gray-900">
            Free
          </span>
        )}
      </div>
      <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>
      <ul
        role="list"
        className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
      >
        {features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckIcon
              className="h-6 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
    {redirect ? (
      <Link
        href="/examples/firebase/register"
        className="
        mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visibile:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80
        "
      >
        Get Started Today
      </Link>
    ) : (
      id && <CheckoutButton />
    )}
  </div>
);
const PrincingCards = ({ redirect }: PrincingCardsProps) => (
  <div>
    <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
      {tiers.map((tier) => (
        <PricingCard
          key={tier.id}
          name={tier.name}
          redirect={redirect}
          id={tier.id}
          href={tier.href}
          priceMonthly={tier.priceMonthly}
          description={tier.description}
          features={tier.features}
        />
      ))}
    </div>
  </div>
);

export default PrincingCards;
