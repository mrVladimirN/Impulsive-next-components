/* eslint-disable max-len */
import { Product } from '@/types/walmart';

const groupBySKU = (products: Product[]) => products?.reduce((acc: Record<string, Product[]>, curr: Product) => {
  const { sku } = curr.meta;
  if (!acc[sku]) {
    acc[sku] = [];
  }
  acc[sku]?.push(curr);
  return acc;
}, {});
export default groupBySKU;
