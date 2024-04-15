import { DrawerDialogDemo } from './dialog/responsive-dialog';

interface DownloadButtonProps {
  videoId: string;
  musicName: string;
}

export default function DownloadButton({
  videoId,
  musicName,
}: DownloadButtonProps) {
  return (
    <>
      <DrawerDialogDemo videoId={videoId} musicName={musicName} />
    </>
  );
}
