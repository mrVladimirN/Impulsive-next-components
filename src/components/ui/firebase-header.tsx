import { Session, getServerSession } from 'next-auth';
import authOptions from '@/auth/auth';
import Link from 'next/link';
import { MessagesSquareIcon } from 'lucide-react';
import Logo from './logo';
import DarkModeToggle from './dark-mode-toggle';
import UserButton from './user-button';
import CreateChatButton from './create-chat-button';
import UpgradeBanner from './upgrade-banner';

const FirebaseHeader = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />
        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* LanguageSelect */}
          {session ? (
            <>
              <Link href={'/examples/firebase/chat'} prefetch={false}>
                <MessagesSquareIcon />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link href="/examples/firebase/pricing">Pricing</Link>
          )}
          <DarkModeToggle />
          <UserButton session={session as Session} />
        </div>
      </nav>
      <UpgradeBanner />
    </header>
  );
};

export default FirebaseHeader;
