'use client';
import YoutubeLogoIcon from '@/icons/youtube';
import { cn } from '@/lib/utils';
import { SearchIcon, Undo2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ModeToggle } from '../dark-mode/ModeToggle';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function MobileNavbar() {
  const router = useRouter();
  const [openInput, setOpenInput] = useState(false);

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenInput(false); // Close input

    const target = e.target as typeof e.target & {
      search: { value: string };
    };

    if (!target.search.value) return;

    const search = target.search.value;
    router.push(`/search?q=${search}`);
  };

  useEffect(() => {
    if (!openInput) return;

    const input = document.querySelector(
      'input[name=search]'
    ) as HTMLInputElement;
    input.focus();
  }, [openInput]);

  return (
    <header className='h-16 w-full top-0 left-0 sticky bg-background px-2 md:hidden flex items-center z-50 justify-between border-b gap-3'>
      <Link href={'/'} className={cn('flex', openInput && 'hidden')}>
        <YoutubeLogoIcon className='h-5 fill-current' />
      </Link>

      <form
        className={cn('flex gap-3', openInput && 'w-full')}
        onSubmit={onHandleSubmit}
      >
        <div className={cn('hidden', openInput && 'flex', 'gap-2', 'w-full')}>
          <Button
            size={'icon'}
            className='aspect-square'
            type='button'
            onClick={() => setOpenInput(false)}
          >
            <Undo2 size={20} />
          </Button>
          <Input placeholder='Buscar' name='search' type='search'></Input>
        </div>

        <div className='flex gap-1'>
          <Button
            size={'icon'}
            type='button'
            onClick={() => setOpenInput(!openInput)}
          >
            <SearchIcon className='h-5' />
          </Button>
          <ModeToggle />
        </div>
      </form>
    </header>
  );
}
