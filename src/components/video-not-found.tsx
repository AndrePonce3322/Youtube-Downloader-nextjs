import { AlertCircle } from 'lucide-react';

export default function VideoNotFound() {
  return (
    <div className='text-xl font-medium flex items-center gap-2 py-2 rounded-md opacity-40'>
      <AlertCircle />
      Información no disponible
    </div>
  );
}
