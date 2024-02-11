import FirebaseHeader from '@/components/ui/firebase-header';
import ClientProviders from '@/providers/client-provider';
import FirebaseAuthProvider from '@/providers/firebase-auth-provider';
import ThemeProvider from '@/providers/theme-provider';
import SubscriptionProvider from '@/providers/subscription-provider';
import { ReactNode } from 'react';

type FirebaseLayoutProps = {
  children: ReactNode;
};

const FirebaseLayout = ({ children }: FirebaseLayoutProps) => (
  <ClientProviders>
    <div className="flex flex-col min-h-screen">
      <FirebaseAuthProvider>
        <SubscriptionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <FirebaseHeader />
            {children}
          </ThemeProvider>
        </SubscriptionProvider>
      </FirebaseAuthProvider>
    </div>
  </ClientProviders>
);
export default FirebaseLayout;
