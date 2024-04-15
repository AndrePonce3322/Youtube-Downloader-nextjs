import { CheckCircle2, Play } from 'lucide-react';
import Link from 'next/link';

interface PlayListCardProps {
  videoId: string;
  author: string;
  title: string;
  thumbnail: string;
  publishDate: string;
  duration: number;
}

export default function PlayListCard({
  videoId,
  author,
  title,
  thumbnail,
  publishDate,
  duration,
}: PlayListCardProps) {

  function SecondsToMinutes(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
  }

  return (
    <Link
      className='flex md:flex-row flex-col gap-2 group'
      href={`/watch?v=${videoId}`}
      title={title}
    >
      <div className='w-full md:w-40 aspect-video relative' style={{ minWidth: '10rem' }}>
        <img
          src={thumbnail}
          alt={title + ' thumbnail'}
          sizes='(max-width: 768px) 100vw, 33vw'
          className='md:rounded-md object-cover w-full h-full aspect-video'
        />

        <div className='absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] '>
          <Play
            size={40}
            className='text-transparent fill-transparent group-hover:text-white group-hover:fill-white transition duration-75'
          />
        </div>

        <div className="absolute bottom-1 right-2 bg-black bg-opacity-80 text-white text-xs rounded-md px-1">
          <time className='text-sm text-muted-foreground'>
            {SecondsToMinutes(duration)}
          </time>
        </div>
      </div>

      <header className='flex flex-col gap-1 text-xs'>
        <h3 className='line-clamp-2 md:text-base text-sm text-wrap' style={{ wordBreak: "break-word"}}>{title}</h3>
        <div className='flex flex-col'>
          <div className='text-xs md:text-sm text-muted-foreground flex items-center gap-1'>
            <span>{author}</span>
            <CheckCircle2
              size={16}
              className='text-white dark:text-black fill-muted-foreground'
            />
          </div>
          <time className='text-xs md:text-sm text-muted-foreground'>{publishDate}</time>
        </div>
      </header>
    </Link>
  );
}
