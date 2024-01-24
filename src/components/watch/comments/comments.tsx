import ButtonWithTooltip from '@/components/button-with-tooltip';
import { Button } from '@/components/ui/button';
import OrderByIcon from '@/icons/order-by';
import CommentList from './comment-list';

export default function Comments({ videoId }: { videoId: string }) {
  return (
    <section className='flex flex-col gap-5'>
      <header className='flex gap-3'>
        <h1 className='text-[22px] font-semibold'>20 comentarios</h1>
        <ButtonWithTooltip tooltip='Ordenar comentarios'>
          <Button variant={'ghost'} className='flex gap-2 items-center'>
            <OrderByIcon heigth='24px' width='24px' className='fill-primary' />
            Ordenar por
          </Button>
        </ButtonWithTooltip>
      </header>

      <div className='w-full flex flex-col gap-10'>
        {videoId && <CommentList videoId={videoId} />}
      </div>
    </section>
  );
}
