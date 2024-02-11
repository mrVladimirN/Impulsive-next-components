'use client';

import { Product } from '@/types/walmart';
import useCartStore from 'store/walmart-store';
import { Button } from './ui/button';
import RemoveFromCartButton from './ui/remove-from-cart-button';

type AddToCartButtonProps = {
  product: Product;
};
const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart
  ]);

  const productsInCart = cart.filter(
    (item) => item.meta.sku === product.meta.sku
  ).length;

  const handleAdd = () => {
    addToCart(product);
  };

  if (productsInCart > 0) {
    return <div className='flex space-x-5 items-center'>
        <RemoveFromCartButton product={product}/>
        <span>{productsInCart}</span>
        <Button className='bg-walmart hover:bg-walmart/50'
        onClick={handleAdd}> +</Button>
    </div>;
  }
  return <Button onClick={handleAdd} className='bg-walmart hover:bg-walmart/50'> Add to Cart</Button>;
};

export default AddToCartButton;
