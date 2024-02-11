import Product from '@/components/ui/product';
import fetchSearch from '@/lib/fetchSearch';
import React from 'react';

type SearchProps = {
    searchParams: {
        q: string
    }
}
const SearchPage = async ({ searchParams: { q } }:SearchProps) => {
  const results = await fetchSearch(q);
  return (
    <div className='p-10'>
      <h1 className='text-3xl font-bold mb-2'> Results for {q}</h1>
      <h2 className='mb-5 text-gray-400'>
        ({results?.content.total_results} results)
      </h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {results?.content.organic.map((prod) => (
            <li key={prod.product_id}>
              <Product product={prod}/>
            </li>
        ))}

      </ul>
    </div>
  );
};

export default SearchPage;
