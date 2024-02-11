import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import cn from '@/lib/utils';

type GridOptionsProps = {
  title: string;
  className?: string;
  image?: string;
};
const GridOptions = ({ title, className, image }: GridOptionsProps) => (
  <Link
    href={{
      pathname: '/examples/walmart/search',
      query: { q: title }
    }}
    className={cn('grid-option relative', className)}
  >
    <h2 className='text-xl font-bold'>{title}</h2>
    {image
    && <Image
    src={image}
    alt ={title}
    layout= 'fill'
    className= 'object-cover opacity-20 rounded-md'>
    </Image>}
  </Link>
);

export default GridOptions;
