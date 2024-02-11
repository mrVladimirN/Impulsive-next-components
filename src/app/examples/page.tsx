import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card';
import cn from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Examples',
  description: 'Examples'
};
const components = [
  {
    title: 'Firebase Auth',
    description: 'Firebase Auth full example',
    link: '/examples/firebase'
  },
  {
    title: 'Walmarkt Clone',
    description: 'Walmarkt Clone full example with paralel routing',
    link: '/examples/walmart'
  }
];
const ExamplesPage = () => (
  <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
    <main className="flex-1">
      <section
        className="w-full pt-12 md:pt-24 lg:pt-32 bg-center bg-cover"
        style={{
          backgroundImage: "\"url('/placeholder.svg')\""
        }}
      >
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16"></div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Pages
              </h2>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            {components.map((component) => (
              <div key={component.title}>
                <Card>
                  <CardHeader>
                    <CardTitle>{component.title}</CardTitle>
                    <CardDescription>{component.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={component.link}
                      className={cn(
                        buttonVariants({
                          size: 'lg'
                        })
                      )}
                    >
                      View
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </div>
);
export default ExamplesPage;
