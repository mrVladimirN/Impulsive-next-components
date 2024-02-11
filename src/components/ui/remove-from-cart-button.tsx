'use client';

import { Product } from '@/types/walmart';
import useCartStore from 'store/walmart-store';
import { Button } from './button';

type RemoveFromCartButtonProps = {
  product: Product;
};
const RemoveFromCartButton = ({ product }: RemoveFromCartButtonProps) => {
  const [removeFromCart] = useCartStore((state) => [
    state.removeFromCart
  ]);

  const handleRemove = () => {
    removeFromCart(product);
  };

  return <Button onClick={handleRemove} className='bg-walmart hover:bg-walmart/50'>-</Button>;
};

export default RemoveFromCartButton;
