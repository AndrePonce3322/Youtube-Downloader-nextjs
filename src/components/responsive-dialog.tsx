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
import { toast } from 'sonner';

import { useProgress } from '@/hooks/useProgress';
import confetti from 'canvas-confetti';

import { useLength } from '@/hooks/useLength';

export function DrawerDialogDemo({
  videoId,
  musicName,
}: {
  videoId: string;
  musicName: string;
}) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const progress = useProgress();
  const length = useLength();

  const [downloadType, setDownloadType] = useState<any>({
    filter: 'audioonly',
    quality: 'highest',
    format: 'mp3',
  });

  const handleOnClick = async () => {
    console.log({
      musicName,
      filter: downloadType.filter,
      quality: downloadType.quality,
      url: videoId,
      format: downloadType.format,
    });

    const res = download({
      musicName,
      filter: downloadType.filter,
      quality: downloadType.quality,
      url: videoId,
      format: downloadType.format,
    });

    res.then(() => {
      confetti({
        particleCount: 800,
        spread: 100,
        origin: { y: 0.6 },
      });
    });

    toast.promise(res, {
      loading: `Descargando`,
      description: `${musicName}.${downloadType.format}`,
      success: 'Descarga completada',
      error: 'Error al descargar',
    });
  };

  const onValueChange = (
    e: 'audio-high' | 'audio-low' | 'video-high' | 'video-low'
  ) => {
    const types = {
      'audio-high': {
        filter: 'audioonly',
        quality: 'highest',
        format: 'mp3',
      },
      'audio-low': {
        filter: 'audioonly',
        quality: 'lowest',
        format: 'mp3',
      },
      'video-high': {
        filter: 'videoandaudio',
        quality: 'highest',
        format: 'mp4',
      },
      'video-low': {
        filter: 'videoandaudio',
        quality: 'lowest',
        format: 'mp4',
      },
    };

    setDownloadType(types[e]);
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
              <span className='text-xl'>Descargar con YouTube Downloader</span>
            </DialogTitle>
            <DialogDescription>
              Selecciona la calidad de vídeo que desees y comienza a descargar.
            </DialogDescription>
          </DialogHeader>
          <RadioGroupDemo onValueChange={(e: any) => onValueChange(e)} />
          <DialogFooter className='flex'>
            <DialogClose asChild>
              <Button type='button' variant={'outline'}>
                Cancelar
              </Button>
            </DialogClose>
            <Button type='submit' onClick={handleOnClick}>
              Descargar {progress !== 0 && `- ${progress}%`}
            </Button>
          </DialogFooter>

          <div className='text-sm text-muted-foreground flex justify-between w-full mt-1'>
            <div>
              Creador por{' '}
              <Link href={'https://andrepg.vercel.app'} className='underline'>
                @andreponce
              </Link>
            </div>

            {length !== 0 && (
              <span className='text-black'>
                Tamaño de archivo: {(length / 1000000).toFixed(1)}MB
              </span>
            )}
          </div>
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

        {/* Radio group form to select the quality and format */}
        <div className='mx-4 flex flex-col gap-8 mt-4'>
          <RadioGroupDemo onValueChange={(e: any) => onValueChange(e)} />
          <DialogFooter className='flex gap-2'>
            <Button
              type='button'
              variant={'outline'}
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button type='submit' onClick={handleOnClick}>
              Descargar {progress !== 0 && `- ${progress}%`}
            </Button>
          </DialogFooter>
        </div>

        <div className='absolute bottom-4 px-4 text-sm text-muted-foreground flex justify-between w-full'>
          <div>
            Creador por{' '}
            <Link href={'https://andrepg.vercel.app'} className='underline'>
              @andreponce
            </Link>
          </div>

          {length !== 0 && (
            <span className='text-black'>
              Tamaño de archivo: {(length / 1000000).toFixed(1)}MB
            </span>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function RadioGroupDemo({
  onValueChange,
}: {
  onValueChange: (e: string) => void;
}) {
  return (
    <RadioGroup defaultValue='audio-high' onValueChange={onValueChange}>
      <h6 className='font-medium text-sm mb-2 -mt-1 md:mt-0'>Audio</h6>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='audio-high' id='r1' />
        <Label htmlFor='r1'>Alto {'(720p)'}</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='audio-low' id='r2' />
        <Label htmlFor='r2'>Estandar {'(480p)'}</Label>
      </div>

      <h6 className='font-medium text-sm mt-3 mb-2'>Video</h6>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='video-high' id='r3' />
        <Label htmlFor='r3'>Alto {'(720p)'}</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='video-low' id='r4' />
        <Label htmlFor='r4'>Estandar {'(480p)'}</Label>
      </div>
    </RadioGroup>
  );
}
