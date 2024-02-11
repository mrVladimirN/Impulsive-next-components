'use client';

import Basket from '@/components/ui/basket';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

const BasketInterception = () => {
  const router = useRouter();
  const onDismiss = () => {
    router.back();
  };
  return (
    <Dialog
      open
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onDismiss();
        }
      }}
    >
      <DialogContent className='h-4/5 w-full overflow-scroll max-w-3xl'>
        <DialogHeader>
          <DialogTitle>Basket</DialogTitle>
          <DialogDescription>
            <p>Contents of your basket</p>
          </DialogDescription>
        </DialogHeader>
        <Basket/>
      </DialogContent>
    </Dialog>
  );
};

export default BasketInterception;
