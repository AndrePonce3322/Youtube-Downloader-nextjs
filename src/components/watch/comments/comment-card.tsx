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
    <div className='flex gap-3'>
      <Link
        className='flex gap-2 group'
        rel='nofollow noopener noreferrer'
        href={`https://www.youtube.com/channel/${channelId}`}
        target='_blank'
      >
        <Avatar className='size-11'>
          <AvatarImage src={thumbnail} alt={`@${username}`} />
          <AvatarFallback>YT</AvatarFallback>
        </Avatar>
      </Link>

      <div className='flex flex-col text-sm relative gap-1'>
        <Link
          className='flex gap-2 group'
          rel='nofollow noopener noreferrer'
          href={`https://www.youtube.com/channel/${channelId}`}
          target='_blank'
        >
          <span className='font-medium group-hover:underline'>{username}</span>
          <CardTimeAgo time={publishDate} />
        </Link>
        <pre className='font-sans text-pretty text-[15px] break-words'>
          {comment}
        </pre>

        <div className='mt-3 text-base flex gap-2'>
          <LikeButtons countLikes={Number(likeCount)} />
        </div>
      </div>
    </div>
  );
}
