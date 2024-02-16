import cn from '@/lib/utils';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export type CursBaseProps = {
  /** Enable cursor blinking animation */
  cursorBlinking?: boolean;
  /** Change cursor style */
  cursorStyle?: ReactNode;
  /** Change cursor color */
  cursorColor?: string;
};
export type CursorProps = HTMLAttributes<HTMLSpanElement> & CursBaseProps;

const Cursor = forwardRef<HTMLSpanElement, CursorProps>(
  (
    {
      cursorBlinking = true,
      cursorStyle = '|',
      cursorColor = 'inherit',
      className,
      ...props
    },
    ref
  ) => (
    <span
      ref={ref}
      style={{ color: cursorColor }}
      className={cn(
        `relative left-3 top-0 opacity-100 ${cursorBlinking ? 'blinking' : ''}`,
        className
      )}
      {...props}
    >
      {cursorStyle}
    </span>
  )
);

Cursor.displayName = 'Cursor';

export default Cursor;
