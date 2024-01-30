import ButtonWithTooltip from '@/components/button-with-tooltip';
import { Button } from '@/components/ui/button';
import OrderByIcon from '@/icons/order-by';

export default function CommentsHeader({ commentsLength }: { commentsLength: number }) {
  return (
    <header className='flex gap-3 justify-between md:justify-normal'>
      <h1 className='text-lg md:text-[22px] font-semibold'>
        {commentsLength} comentarios
      </h1>
      <ButtonWithTooltip tooltip='Ordenar comentarios'>
        <Button variant={'ghost'} className='flex gap-2 items-center'>
          <OrderByIcon heigth='24px' width='24px' className='fill-primary' />
          Ordenar por
        </Button>
      </ButtonWithTooltip>
    </header>
  );
}
