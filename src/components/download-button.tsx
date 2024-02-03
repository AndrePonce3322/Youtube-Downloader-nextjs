'use client';
import { DrawerDialogDemo } from './responsive-dialog';

interface DownloadButtonProps {
  videoId: string;
}

export default function DownloadButton({ videoId }: DownloadButtonProps) {
  return (
    <>
      <DrawerDialogDemo videoId={videoId} />
    </>
  );
}
