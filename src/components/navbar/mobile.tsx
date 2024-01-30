import YoutubeLogoIcon from '@/icons/youtube';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '../dark-mode/ModeToggle';
import { Button } from '../ui/button';

export default function MobileNavbar() {
  return (
    <header className='h-16 w-full top-0 left-0 sticky bg-background px-[24px] md:hidden flex items-center z-50 justify-between'>
      <Link href={'/'}>
        <YoutubeLogoIcon className='h-5 fill-current' />
      </Link>

      <div className='flex gap-1'>
        <Button size={'icon'}>
          <SearchIcon className='h-5' />
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
