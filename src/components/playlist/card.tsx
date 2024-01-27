import { CheckCircle2, Play } from 'lucide-react';
import Image from 'next/image';
import CardTimeAgo from '../card/timeago';
import Link from 'next/link';

interface PlayListCardProps {
  videoId: string;
  author: string;
  title: string;
  thumbnail: string;
  publishDate: Date;
}

export default function PlayListCard({
  videoId,
  author,
  title,
  thumbnail,
  publishDate,
}: PlayListCardProps) {
  return (
    <Link className='flex gap-2 group' href={`/watch?v=${videoId}`}>
      <div className='min-w-40 w-40 max-w-40 aspect-video relative'>
        <Image
          src={thumbnail}
          alt={title + ' thumnail'}
          fill
          sizes='(max-width: 768px) 100vw, 33vw'
          className='rounded-md object-cover'
        />

        <div className='absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] '>
          <Play
            size={40}
            className='text-transparent fill-transparent group-hover:text-white group-hover:fill-white transition duration-75'
          />
        </div>
      </div>

      <header className='flex flex-col gap-1'>
        <h3 className='line-clamp-2'>{title}</h3>
        <div className='flex flex-col'>
          <div className='text-sm text-muted-foreground flex items-center gap-1'>
            <span>{author}</span>
            <CheckCircle2
              size={16}
              className='text-white dark:text-black fill-muted-foreground'
            />
          </div>
          <CardTimeAgo time={publishDate} />
        </div>
      </header>
    </Link>
  );
}