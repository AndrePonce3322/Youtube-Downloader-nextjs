import YoutubeLogoIcon from '@/icons/youtube';
import Link from 'next/link';
import { ModeToggle } from '../dark-mode/ModeToggle';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function MobileNavbar() {
  return (
    <header className='h-16 w-full top-0 left-0 sticky bg-background px-[24px] md:hidden flex items-center z-50 justify-between'>
      <Link href={'/'}>
        <YoutubeLogoIcon className='h-5 fill-current' />
      </Link>

      <div className='flex gap-4'>
        <ModeToggle />
        <Avatar>
          <AvatarImage
            src='https://github.com/andreponce3322.png'
            alt='@andreponce3322'
          />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
