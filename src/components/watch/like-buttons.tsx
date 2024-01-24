'use client';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import ButtonWithTooltip from '../button-with-tooltip';

export default function LikeButtons({ countLikes }: { countLikes?: number }) {
  const [like, setLike] = useState({
    like: false,
    dislike: false,
  });
  const [countLikesh, setCountLikesh] = useState(countLikes);

  const onClickLike = () => {
    if (countLikesh === 0) setCountLikesh(1);

    if (countLikesh) {
      setCountLikesh(countLikesh + 1);
      if (like.like) setCountLikesh(countLikes);
    }
    setLike((prev) => {
      like.dislike = false;
      return { ...prev, like: !like.like };
    });
  };

  const onClickDislike = () => {
    setLike((prev) => {
      like.like = false;
      return { ...prev, dislike: !like.dislike };
    });
  };

  return (
    <div className='-ml-4 flex'>
      <ButtonWithTooltip tooltip='Me gusta'>
        <Button
          variant={'ghost'}
          onClick={() => onClickLike()}
          title='Me gusta'
          className='flex gap-2 items-center'
        >
          <ThumbsUp
            size={16}
            className={cn(like.like && 'fill-black dark:fill-white')}
          />
          {countLikesh && countLikesh}
        </Button>
      </ButtonWithTooltip>

      <ButtonWithTooltip tooltip='No me gusta'>
        <Button
          variant={'ghost'}
          onClick={() => onClickDislike()}
          title='No me gusta'
        >
          <ThumbsDown
            size={16}
            className={cn(like.dislike && 'fill-black dark:fill-white')}
          />
        </Button>
      </ButtonWithTooltip>
    </div>
  );
}
