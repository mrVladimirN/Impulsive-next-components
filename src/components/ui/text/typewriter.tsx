'use client';

import { JSX } from 'react';
import { TypewriterProps, useTypewriter } from '@/app/hooks/useTypewriting';
import Cursor, { CursorProps } from './cursor';

type ComponentProps = {
  cursor?: boolean;
} & TypewriterProps &
  CursorProps;

const Typewriter = ({
  words = [],
  loop = 1,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  cursor = false,
  cursorStyle = '|',
  cursorColor = 'inherit',
  cursorBlinking = true,
  onLoopDone,
  onType,
  onDelay,
  onDelete
}: ComponentProps): JSX.Element => {
  const [text] = useTypewriter({
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    onLoopDone,
    onType,
    onDelay,
    onDelete
  });

  return (
    <>
      <span>{text}</span>
      {cursor && (
        <Cursor
          cursorStyle={cursorStyle}
          cursorColor={cursorColor}
          cursorBlinking={cursorBlinking}
        />
      )}
    </>
  );
};

export default Typewriter;
