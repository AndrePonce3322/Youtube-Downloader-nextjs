'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import Head from 'next/head';
import { cn } from '@/lib/utils';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <Head>
        <meta
          name='theme-color'
          content={cn(theme === 'light' ? '#FAFAFA' : '#0f0f0f')}
        ></meta>
      </Head>

      <Button
        variant='outline'
        size='icon'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        type='button'
      >
        <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      </Button>
    </>
  );
}
