'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type ClientProvidersProps = {
  children: ReactNode;
}
const ClientProviders = ({ children }: ClientProvidersProps) => (
  <SessionProvider>{children}</SessionProvider>
);

export default ClientProviders;
