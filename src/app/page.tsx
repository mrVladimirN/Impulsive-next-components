import { Shell } from '@/components/shells/shell';
import Link from 'next/link';
import cn from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const Home = () => (
    <div className="flex flex-col items-center justify-center h-screen">
      <Shell as="div" className="gap-12">
        <section
          aria-labelledby="hero-heading"
          className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
        >
          <div className="max-w-[46rem] text-lg text-muted-foreground mt-[5%] sm:text-xl">
           Full Example Pages
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/examples"
              className={cn(
                buttonVariants({
                  size: 'lg'
                })
              )}
            >
              Example
            </Link>
          </div>
        </section>
      </Shell>
    </div>
);

export default Home;
