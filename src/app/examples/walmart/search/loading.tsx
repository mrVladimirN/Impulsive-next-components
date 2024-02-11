import Skeleton from '@/components/ui/skeleton';

const LoadingSearchPage = () => (
  <>
    <div className="p-10"></div>
    <h1 className="text-3xl font-bold mb-2">Scrapping Results</h1>
    <h2 className="mb-5 text-gray-400">Wont take long</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols4 gap-10">
      <Skeleton className="w-[300px] h-[400px]"></Skeleton>
      <Skeleton className="w-[300px] h-[400px]"></Skeleton>
      <Skeleton className="w-[300px] h-[400px]"></Skeleton>
      <Skeleton className="w-[300px] h-[400px]"></Skeleton>
      <Skeleton className="w-[300px] h-[400px]"></Skeleton>
      <Skeleton className="w-[300px] h-[400px]"></Skeleton>
      <Skeleton className="w-[300px] h-[400px]"></Skeleton>
      <Skeleton className="w-[300px] h-[400px]"></Skeleton>
    </div>
  </>
);

export default LoadingSearchPage;
