'use client';
import { formatSubscribers } from '@/services/formatView';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import LikeButtons from './like-buttons';
import ButtonWithTooltip from '../button-with-tooltip';

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
    <div className='flex justify-between'>
      {/* Author */}
      <Link
        href={channel_url}
        className='flex gap-3 items-center'
        target='_blank'
      >
        <Image
          src={thumbnail}
          alt={authorName + ' avatar'}
          width={40}
          height={40}
          className='rounded-full'
        />
        <ButtonWithTooltip tooltip={authorName}>
          <div className='flex flex-col' title={authorName}>
            <p className='font-medium'>{authorName}</p>
            <span className='text-sm text-muted-foreground'>
              {formatSubscribers(subscriber_count)}
            </span>
          </div>
        </ButtonWithTooltip>
      </Link>
      {/* Likes and Download Button*/}
      <div className='flex gap-2'>
        <LikeButtons />
        <Button className='flex gap-2 items-center' title='Descargar'>
          <Download size={16} />
          <span>Descargar</span>
        </Button>
      </div>
    </div>
  );
}
