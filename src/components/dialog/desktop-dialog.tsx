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
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import YoutubeLogoIcon from '@/icons/youtube';
import Link from 'next/link';
import RadioGroupForDialog from './radioGroup';

interface DialogDesktopProps {
  isDownloading: boolean;
  progress: number;
  handleOnClick: () => void;
  onValueChange: (e: any) => void;
  length: number;
}

export default function DesktopDialog({ isDownloading, progress, handleOnClick, onValueChange, length }: DialogDesktopProps) {
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
        <RadioGroupForDialog onValueChange={(e: any) => onValueChange(e)} />
        <DialogFooter className='flex'>
          <DialogClose asChild>
            <Button type='button' variant={'outline'}>
              Cancelar
            </Button>
          </DialogClose>

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

        <div className='text-sm text-muted-foreground flex justify-between w-full mt-1'>
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
      </DialogContent>
    </Dialog>
  );
}