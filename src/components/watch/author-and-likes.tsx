'use client';
import { formatSubscribers } from '@/services/formatView';
import { Download } from 'lucide-react';
import Link from 'next/link';
import ButtonWithTooltip from '../button-with-tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import LikeButtons from './like-buttons';

interface AuthorAndLikesProps {
  channel_url: string;
  authorName: string;
  subscriber_count: number;
  thumbnail: string;
}

export default function AuthorAndLikes({
  authorName,
  channel_url,
  subscriber_count,
  thumbnail,
}: AuthorAndLikesProps) {
  return (
    <div className='flex justify-between flex-col gap-5 md:items-center md:flex-row mt-2 md:mt-0'>
      {/* Author */}
      <Link
        href={channel_url}
        className='flex gap-3 items-center'
        target='_blank'
      >
        <Avatar className='size-10 md:size-11'>
          <AvatarImage src={thumbnail} alt='@andreponce3322' />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>

        <ButtonWithTooltip tooltip={authorName}>
          <div
            className='flex flex-col text-sm md:text-base'
            title={authorName}
          >
            <p className='font-medium'>{authorName}</p>
            <span className='text-xs md:text-sm text-muted-foreground'>
              {formatSubscribers(subscriber_count)}
            </span>
          </div>
        </ButtonWithTooltip>
      </Link>
      {/* Likes and Download Button*/}
      <div className='flex md:gap-2 gap-4'>
        <LikeButtons />
        <Button className='flex gap-2 items-center' title='Descargar'>
          <Download size={16} />
          <span>Descargar</span>
        </Button>
      </div>
    </div>
  );
}
