import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { ReactNode } from 'react';
import WalmartHeader from '@/components/ui/walmart-header';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components']
};

type WalmartLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

const WalmartLayout = ({ children, modal }: WalmartLayoutProps) => (
  <>
    <div className="">
      <WalmartHeader />
      <div className='flex'>
        {modal}
        {children}
      </div>
    </div>
  </>
);
export default WalmartLayout;
