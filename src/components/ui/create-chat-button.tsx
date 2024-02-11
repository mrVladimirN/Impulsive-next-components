'use client';

import { MessageSquarePlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './button';

const CreateChatButton = () => {
  const router = useRouter();
  const createNewChat = async () => {
    router.push('/chat/abc');
  };
  return (
    <Button variant={'ghost'} onClick={createNewChat}>
      <MessageSquarePlus />
    </Button>
  );
};

export default CreateChatButton;
