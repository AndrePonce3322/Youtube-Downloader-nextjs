import { PlaySquare, SquareUserRound } from 'lucide-react';
import { Button } from '../ui/button';

export default function ButtonsDescription() {
  return (
    <div className='flex gap-2 w-full [&>button]:bg-transparent mt-6'>
      <Button
        variant={'outline'}
        className='border-gray-500/30 dark:border-primary/10 w-full text-sm md:text-base font-normal '
      >
        <PlaySquare size={22} className='mr-1' strokeWidth={1} />
        Videos
      </Button>
      <Button
        variant={'outline'}
        className='border-gray-500/30 dark:border-primary/10 w-full text-sm md:text-base font-normal '
      >
        <SquareUserRound strokeWidth={1} size={22} className='mr-1' />
        Información
      </Button>
    </div>
  );
}
