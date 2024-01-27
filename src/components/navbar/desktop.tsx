import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import YoutubeLogoIcon from '@/icons/youtube';
import { Mic } from 'lucide-react';
import Link from 'next/link';
import ButtonWithTooltip from '../button-with-tooltip';
import { ModeToggle } from '../dark-mode/ModeToggle';
import { Button } from '../ui/button';

export default function DesktopNavbar() {
  return (
    <header className='h-16 w-full bg-background border-b sticky top-0 left-0 z-50 px-[24px] md:flex items-center justify-between hidden '>
      <Link href={'/'}>
        <YoutubeLogoIcon className='h-5 fill-current' />
      </Link>

      <div className='flex gap-2'>
        <InputSearchVideo />

        <ButtonWithTooltip tooltip='Realiza búsquedas con la voz'>
          <DialogDemo />
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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import InputSearchVideo from '../search/input-search-video';

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'icon'} variant={'outline'} className='bg-muted'>
          <Mic className='size-5' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Realiza búsquedas con la voz</DialogTitle>
          <DialogDescription>
            Para realizar búsquedas por voz, ve a la configuración del navegador
            y habilita el acceso al micrófono
          </DialogDescription>
        </DialogHeader>
        {/* Contenido */}
        <div className='flex items-center justify-center'>
          <Button size={'default'} variant={'default'} className='mt-10 mb-10'>
            <Mic className='size-6' />
          </Button>
        </div>
        {/* /Fin del contenido */}
      </DialogContent>
    </Dialog>
  );
}
