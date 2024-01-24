import FirebaseNavBar from '@/components-for-examples/navbar';
import AuthProvider from '@/providers/examples/firebase/auth-provider';
import { ReactNode } from 'react';

interface IntroLayoutProps {
  children: ReactNode;
}

export default async function IntroLayout({ children }: IntroLayoutProps) {
  return (
    <AuthProvider>
    <main className="flex flex-col items-center h-screen w-screen bg-slate-800 pt-40">
      <FirebaseNavBar />
      {children}
    </main>
    </AuthProvider>
  );
}
