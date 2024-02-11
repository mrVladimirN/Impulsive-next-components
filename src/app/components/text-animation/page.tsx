import Typewriter from '@/components/ui/text/typewriter';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import React from 'react';

const TextAnimationPage = () => (
  <div className="flex items-center justify-center h-screen">
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] text-emerald-500 dark:text-cyan-200">
              <Typewriter
                words={['word1', 'word2', 'word3']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]  ">
            &nbsp;&nbsp;your data!
          </h1>
          </TooltipTrigger>
          <TooltipContent><p>typewriter component</p></TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  </div>
);

export default TextAnimationPage;
