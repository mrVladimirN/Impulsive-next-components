import GridOption from '@/components/grid-option';
import React from 'react';

const categoriesGrid = [
  {
    title: 'Sweet gifts for less',
    image: 'https://links.papareact.com/1dy',
    className: 'bg-pink-200 h-full md:h-32'
  },
  {
    title: 'Shop Wardrobe',
    image: 'https://links.papareact.com/8ko',
    className: 'bg-blue-100 col-span-2 row-span-2'
  },
  {
    title: 'Shop Home',
    image: 'https://links.papareact.com/szu',
    className: 'bg-pink-200 row-span-2'
  },
  {
    title: 'Shop Electronics',
    image: 'https://links.papareact.com/n7r',
    className: 'bg-yellow-100 h-64'
  },
  {
    title: 'Shop Toys',
    image: 'https://links.papareact.com/pj2',
    className: 'bg-green-100 h-64 col-span-2'
  },
  {
    title: 'All you need for Match Day',
    image: 'https://links.papareact.com/m8e',
    className: 'bg-red-100 col-span-2 row-span-2'
  },
  {
    title: 'Shop Gadgets',
    image: 'https://links.papareact.com/gs1',
    className: 'bg-orange-100 h-64'
  },
  {
    title: 'Shop Beauty',
    image: 'https://links.papareact.com/4y0',
    className: 'bg-blue-100 h-64'
  },
  {
    title: 'Shop Sports',
    image: 'https://links.papareact.com/sq2',
    className: 'bg-blue-100 h-64'
  },
  {
    title: 'Enjoy Free Shipping',
    image: 'https://links.papareact.com/9fh',
    className: 'bg-rose-100 h-64'
  },
  {
    title: 'Flash Deals',
    image: 'https://links.papareact.com/qx7',
    className: 'bg-orange-200 h-64 col-span-2'
  }
];
const WalmartPage = () => (
  <div className=' flex-1'>
    <div className='grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6'>
      {categoriesGrid.map((catGrid) => (
        <GridOption
          key={catGrid.title}
          title={catGrid.title}
          image={catGrid.image}
          className={catGrid.className}
        />
      ))}
    </div>
  </div>
);

export default WalmartPage;
