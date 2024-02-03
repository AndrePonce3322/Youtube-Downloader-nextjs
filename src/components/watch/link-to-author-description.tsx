import { formatSubscribers } from '@/services/formatView';
import Image from 'next/image';
import Link from 'next/link';

interface AuthorAndLikesProps {
  channel_url: string;
  authorName: string;
  subscriber_count: number;
  thumbnail: string;
  title: string;
}

export default function LinkToAuthorDescription({
  channel_url,
  authorName,
  subscriber_count,
  thumbnail,
  title,
}: AuthorAndLikesProps) {
  return (
    <Link
      href={channel_url}
      className='mt-7 flex gap-3 items-center'
      target='_blank'
      rel='noreferrer nofollow'
    >
      <Image
        src={thumbnail}
        alt={title + ' thumbnail'}
        width={70}
        height={70}
        className='rounded-full'
      ></Image>
      <div className='flex flex-col'>
        <h2 className='md:text-xl font-medium'>{authorName}</h2>
        <span className='text-sm'>{formatSubscribers(subscriber_count)}</span>
      </div>
    </Link>
  );
}
