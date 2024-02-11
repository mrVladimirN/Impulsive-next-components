'use client';

import Link from 'next/link';
import React, { FormEvent } from 'react';
import Image from 'next/image';
import {
  Grid2X2, Heart, Search, ShoppingCart, User
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import useCartStore from 'store/walmart-store';
import getCartTotal from '@/lib/getCartTotal';

const WalmartHeader = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const total = getCartTotal(cart);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;
    router.push(`/examples/walmart/search?q=${input}`);
  };
  return (
    <header className="flex flex-col md:flex-row bg-walmart items-center px-10 py-7 space-x-5">
      <Link href="/examples/walmart" className="mb-5 md:mb-0">
        <Image
          src="https://links.papareact.com/xsi"
          alt="Picture of the author"
          width={150}
          height={150}
        />
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full w-full flex-1"
      >
        <input
          name="input"
          type="text"
          placeholder="Search Everything"
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black"
        />
        <button type="submit">
          <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
        </button>
      </form>

      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href={'/'}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          <p>Departament</p>
        </Link>
        <Link
          href={'/'}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          <p>Services</p>
        </Link>
        <Link
          href={'/'}
          className="xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />
          <p className="text-xs font-extralight">Reorder</p>
          <p>My items</p>
        </Link>
        <Link
          href={'/'}
          className="xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <p className="text-xs font-extralight">Sign In</p>
          <p>Account</p>
        </Link>
        <Link
          href={'/examples/walmart/basket'}
          className="xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCart size={20} />
          <p className="text-xs font-extralight">
            {cart && cart.length > 0 ? `${cart.length} items` : 'No items'}
          </p>
          <p>{cart && cart.length > 0 ? total : ''}</p>
        </Link>
      </div>
    </header>
  );
};

export default WalmartHeader;
