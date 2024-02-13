'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChannelIdContext } from '@/context/channelId';
import { formatViews } from '@/services/formatView';
import Link from 'next/link';
import { useContext } from 'react';
import ButtonWithTooltip from '../button-with-tooltip';
import CardTimeAgo from './timeago';

export default function Card({
  id,
  src,
  author,
  time,
  title,
  channelID,
  views,
}: {
  id: string;
  src: string;
  author: string;
  title: string;
  views: string;
  time: Date;
  channelID: string;
}) {
  const vistas = formatViews(Number(views));
  const { setChannelId } = useContext(ChannelIdContext);

  const handleClick = () => {
    setChannelId(channelID);
  };

  return (
    <Link
      onClick={() => {
        handleClick();
      }}
      className='flex flex-col gap-3 md:gap-2 group transition duration-300 active:bg-gray-500/10 md:p-1 rounded-md'
      href={`/watch?v=${id}`}
    >
      <div className='h-[225px] w-full md:rounded-md flex flex-col relative overflow-hidden'>
        <img
          alt={title}
          src={src}
          sizes='(max-width: 768px) 100vw, 33vw'
          className='object-cover group-hover:scale-105 transition duration-300 ease-in-out w-full h-full'
        />
      </div>

      <div className='flex gap-2 px-2 md:px-0'>
        <Avatar>
          <AvatarImage src={src} alt='@andreponce3322' />
          <AvatarFallback>YT</AvatarFallback>
        </Avatar>

        {/* Title and author */}
        <div className='flex flex-col md:gap-1'>
          <h4
            className='font-medium line-clamp-2 text-sm md:text-base'
            title={title}
          >
            {title}
          </h4>
          {/* Author */}
          <div className='flex flex-col text-xs md:text-sm text-muted-foreground'>
            <div>
              <ButtonWithTooltip tooltip={author}>
                <Link
                  onClick={(e) => e.stopPropagation()}
                  href={`https://www.youtube.com/channel/${channelID}`}
                  className='hover:text-primary cursor-pointer'
                  target='_blank'
                  rel='noopener noreferrer'
                  title={author}
                >
                  {author}
                </Link>
              </ButtonWithTooltip>
            </div>
            {/* Views and time */}
            <div className='flex gap-1 md:text-sm'>
              <span>{vistas}</span>
              <span>&#183;</span>
              <CardTimeAgo time={time} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// 2024-01-17T14:30:07Z
// Views 1372572
