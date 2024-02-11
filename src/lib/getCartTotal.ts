import { Product } from '@/types/walmart';

const getCartTotal = (products: Product[]) => {
  const total = products.reduce((acc: number, curr: Product) => acc + curr.price, 0);
  return `${products[0]?.currency ? products[0]?.currency : '$'} ${total.toFixed(2)}`;
};
export default getCartTotal;
