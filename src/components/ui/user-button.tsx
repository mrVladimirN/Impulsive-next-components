'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { useSubscriptionStore } from 'store/firebase-store';
import { StarIcon } from 'lucide-react';
import UserAvatar from './user-avatar';
import { Button } from './button';
import LoadingSpinner from './loading-spinner';
import ManageAccountButton from './manage-account-button';

type UserButtonProps = {
  session?: Session;
};
const UserButton = ({ session }: UserButtonProps) => {
  const subscription = useSubscriptionStore((state) => state.subscription);
  if (!session) {
    return (
      <Button variant={'outline'} onClick={() => signIn()}>
        Sign In
      </Button>
    );
  }
  return (
    session && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar
            name={session.user?.name as string}
            image={session.user?.image as string}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session.user?.name as string}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {subscription === undefined && (
            <DropdownMenuItem>
              <LoadingSpinner/>
            </DropdownMenuItem>
          )}
          {
            subscription?.role === 'pro' && (
              <>
              <DropdownMenuLabel className='text-xs flex items-center justify-center space-x-1 text-[#E935C1] animate-pulse'>
                <StarIcon fill='#E935C1'/>
                <p>PRO</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator/>
              <DropdownMenuItem>
              <ManageAccountButton/>
              </DropdownMenuItem>
              </>
            )
          }
          <DropdownMenuItem onClick={() => signOut()}>
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
};
export default UserButton;
