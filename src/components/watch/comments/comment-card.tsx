import CardTimeAgo from '@/components/card/timeago';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import LikeButtons from '../like-buttons';
import Link from 'next/link';

interface CommentCardProps {
  channelId: string;
  username: string;
  comment: string;
  thumbnail: string;
  publishDate: Date;
  likeCount: number;
}

export default function CommentCard({
  username,
  comment,
  likeCount,
  publishDate,
  thumbnail,
  channelId,
}: CommentCardProps) {
  return (
    <div className='flex gap-2 md:gap-3 overflow-hidden'>
      <Link
        className='flex gap-2 group'
        rel='nofollow noopener noreferrer'
        href={`https://www.youtube.com/channel/${channelId}`}
        target='_blank'
      >
        <Avatar className='size-9 md:size-11'>
          <AvatarImage src={thumbnail} alt={`@${username}`} />
          <AvatarFallback>YT</AvatarFallback>
        </Avatar>
      </Link>

      <div className='flex flex-col text-xs md:text-sm relative gap-1'>
        <div className='flex gap-2'>
          <Link
            href={`https://www.youtube.com/channel/${channelId}`}
            className='font-medium  hover:underline'
            target='_blank'
            rel='nofollow noopener noreferrer'
          >
            {username}
          </Link>
          <CardTimeAgo time={publishDate} />
        </div>
        <pre className='font-sans text-pretty text-sm md:text-[15px]'>
          {comment}
        </pre>

        <div className='mt-1 md:mt-3 text-base flex gap-2'>
          <LikeButtons countLikes={Number(likeCount)} marginLeft />
        </div>
      </div>
    </div>
  );
}
