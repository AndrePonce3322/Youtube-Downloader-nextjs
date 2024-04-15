

import useMediaQuery from '@/hooks/useMediaQuery';

import { download } from '@/services/downloader-function';
import { useState } from 'react';
import { toast } from 'sonner';

import { useProgress } from '@/hooks/useProgress';
import confetti from 'canvas-confetti';

import { qualityOptions } from '@/constants/quality-options';
import { useLength } from '@/hooks/useLength';
import DesktopDialog from './desktop-dialog';
import DialogMobile from './mobile-dialog';

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
  const [isDownloading, setIsDownloading] = useState(false)

  const [downloadType, setDownloadType] = useState<any>({
    filter: 'audioonly',
    quality: 'highest',
    format: 'mp3',
  });

  const handleOnClick = async () => {
    setIsDownloading(true)

    const res = download({
      musicName,
      filter: downloadType.filter,
      quality: downloadType.quality,
      url: videoId,
      format: downloadType.format,
    });

    res.then((response) => {
      if (response.ok) {
        confetti({
          particleCount: 800,
          spread: 100,
          origin: { y: 0.6 },
        });
      }

      setIsDownloading(false)
    });

    toast.promise(res, {
      loading: `Descargando`,
      description: `${musicName}.${downloadType.format}`,
      success: 'Descarga completada',
      error: 'El archivo es muy pesado. Intenta con una calidad más baja.',
    });

  };

  const onValueChange = (
    e: 'audio-high' | 'audio-low' | 'video-high' | 'video-low'
  ) => {
    setDownloadType(qualityOptions[e]);
  };

  if (isDesktop) return <DesktopDialog
    handleOnClick={handleOnClick}
    isDownloading={isDownloading}
    onValueChange={onValueChange}
    progress={progress}
    length={length}
  />

  return <DialogMobile
    handleOnClick={handleOnClick}
    isDownloading={isDownloading}
    onValueChange={onValueChange}
    progress={progress}
    setOpen={setOpen}
    length={length}
    open={open}
  />
}

