import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import YoutubeLogoIcon from '@/icons/youtube';
import { Mic, Search } from 'lucide-react';
import { ModeToggle } from '../dark-mode/ModeToggle';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Link from 'next/link';
import ButtonWithTooltip from '../button-with-tooltip';

export default function DesktopNavbar() {
  return (
    <header className='h-16 w-full bg-background border-b sticky top-0 left-0 z-50 px-[24px] md:flex items-center justify-between hidden '>
      <Link href={'/'}>
        <YoutubeLogoIcon className='h-5 fill-current' />
      </Link>

      <div className='flex gap-2'>
        <Input type='search' placeholder='Buscar' className='w-[450px]' />

        <ButtonWithTooltip tooltip='Realiza búsquedas con la voz'>
          <Button size={'icon'} variant={'outline'} className='bg-muted'>
            <Mic className='size-5' />
          </Button>
        </ButtonWithTooltip>
      </div>

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
