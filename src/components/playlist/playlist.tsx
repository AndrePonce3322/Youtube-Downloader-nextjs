'use client';

import useRelatedVideos from '@/hooks/useRelatedVideos';
import { ListVideo } from 'lucide-react';
import PlayListCardSkeleton from '../skeletons/playlist-card';
import PlayListCard from './card';

export default function PlayList() {
  const relatedVideos = useRelatedVideos();

  if (!relatedVideos.length) {
    return (
      <div className='flex flex-col gap-3'>
        {Array.from({ length: 3 }).map((_, index) => (
          <PlayListCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (relatedVideos.length === 0)
    return (
      <div className='w-full aspect-video flex items-center justify-center text-xl'>
        <span className='flex items-center gap-1 opacity-40'>
          <ListVideo size={22} />
          <h1>Sin vídeos para mostrar</h1>
        </span>
      </div>
    );

  return (
    <div className='flex flex-col gap-8 md:gap-4 border-t pt-4 md:border-t-0 md:pt-0'>
      {relatedVideos.map((item) => (
        <PlayListCard
          videoId={item.id}
          key={item.id}
          author={item.author.name}
          publishDate={item.published}
          thumbnail={item.thumbnails[1].url}
          duration={item.length_seconds}
          title={item.title}
        />
      ))}
    </div>
  );
}
