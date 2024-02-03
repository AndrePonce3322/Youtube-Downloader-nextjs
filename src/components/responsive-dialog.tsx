import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';

import { Label } from '@/components/ui/label';
import useMediaQuery from '@/hooks/useMediaQuery';
import YoutubeLogoIcon from '@/icons/youtube';
import { Download } from 'lucide-react';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { download } from '@/services/downloader-function';
import Link from 'next/link';
import { useState } from 'react';

export function DrawerDialogDemo({ videoId }: { videoId: string }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const handleOnClick = () => {
    download({
      filter: 'audioandvideo',
      quality: 'highest',
      url: `https://www.youtube.com/watch?v=${videoId}`,
    });
  };

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className='flex gap-2 items-center' title='Descargar'>
            <Download size={16} />
            <span>Descargar</span>
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle className='flex flex-col gap-3'>
              <YoutubeLogoIcon heigth='30' width='100px' />
              <h3 className='text-xl'>Descargar con YouTube Downloader</h3>
            </DialogTitle>
            <DialogDescription>
              Selecciona la calidad de vídeo que desees y comienza a descargar.
            </DialogDescription>
          </DialogHeader>
          <RadioGroupDemo />
          <DialogFooter className='flex'>
            <DialogClose asChild>
              <Button type='button' variant={'outline'}>
                Cancelar
              </Button>
            </DialogClose>
            <Button type='submit' onClick={handleOnClick}>
              Descargar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className='flex gap-2 items-center' title='Descargar'>
          <Download size={16} />
          <span>Descargar</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className='pb-20'>
        <DrawerHeader className='text-left'>
          <DialogTitle className='flex flex-col gap-8'>
            <YoutubeLogoIcon width='100px' />
            <h3>Descargar con YouTube Downloader</h3>
          </DialogTitle>
          <DrawerDescription>
            Selecciona la calidad de vídeo que desees y comienza a descargar.
          </DrawerDescription>
        </DrawerHeader>

        <div className='mx-4 flex flex-col gap-8 mt-4'>
          <RadioGroupDemo />
          <DialogFooter className='flex gap-2'>
            <Button
              type='submit'
              variant={'outline'}
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button type='submit' onClick={handleOnClick}>
              Descargar
            </Button>
          </DialogFooter>
        </div>

        <div className='absolute bottom-4 left-4 text-sm text-muted-foreground'>
          Creador por{' '}
          <Link href={'https://andrepg.vercel.app'} className='underline'>
            @andreponce
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue='estandar'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='Alto' id='r1' />
        <Label htmlFor='r1'>Alto {'(720p)'}</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='estandar' id='r2' />
        <Label htmlFor='r2'>Estandar {'(480p)'}</Label>
      </div>
    </RadioGroup>
  );
}
