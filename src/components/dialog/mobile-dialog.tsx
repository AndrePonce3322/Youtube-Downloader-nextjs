import {
  DialogFooter,
  DialogTitle
} from '@/components/ui/dialog';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import YoutubeLogoIcon from '@/icons/youtube';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import RadioGroupForDialog from './radioGroup';

interface DialogMobileProps {
  open: boolean;
  setOpen: any;
  isDownloading: boolean;
  handleOnClick: () => void;
  progress: number;
  onValueChange: (e: any) => void;
  length: number;
}

export default function DialogMobile({ open, setOpen, isDownloading, handleOnClick, progress, onValueChange, length }: DialogMobileProps) {
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
            <span>Descargar con YouTube Downloader</span>
          </DialogTitle>
          <DrawerDescription>
            Selecciona la calidad de vídeo que desees y comienza a descargar.
          </DrawerDescription>
        </DrawerHeader>

        {/* Radio group form to select the quality and format */}
        <div className='mx-4 flex flex-col gap-8 mt-4'>
          <RadioGroupForDialog onValueChange={(e: any) => onValueChange(e)} />
          <DialogFooter className='flex gap-2'>
            <Button
              type='button'
              variant={'outline'}
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>

            {isDownloading ? (
              <Button type='submit' disabled>
                Descargando {progress > 0 && ` - ${progress}%`}
              </Button>
            )
              : (
                <Button type='submit' onClick={handleOnClick}>
                  Descargar
                </Button>
              )
            }
          </DialogFooter>
        </div>

        <div className='absolute bottom-4 px-4 text-xs text-muted-foreground flex justify-between w-full'>
          <div>
            Creado por{' '}
            <Link
              href={'https://andrepg.vercel.app'}
              className='underline'
              target='_blank'
            >
              @andreponce
            </Link>
          </div>

          {length !== 0 && (
            <span className='text-black dark:text-white'>
              Tamaño de archivo: {(length / 1000000).toFixed(1)}MB
            </span>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}