'use client';

import usePlaylist from '@/hooks/usePlaylist';
import PlayListCard from './card';
import PlayListCardSkeleton from '../skeletons/playlist-card';
import { ListVideo } from 'lucide-react';

export default function PlayList({ channelId }: { channelId: string }) {
  const playlist = usePlaylist({ channelId });

  if (!playlist?.items) {
    return (
      <div className='flex flex-col gap-3'>
        {Array.from({ length: 3 }).map((_, index) => (
          <PlayListCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (playlist.items.length === 0)
    return (
      <div className='w-full aspect-video flex items-center justify-center text-xl'>
        <span className='flex items-center gap-1 opacity-40'>
          <ListVideo size={22} />
          <h1>Sin vídeos para mostrar</h1>
        </span>
      </div>
    );

  return (
    <div className='flex flex-col gap-2'>
      {playlist.items.map((item: any, index: number) => (
        <PlayListCard
          videoId={playlist.videoId[index]}
          key={item.id}
          author={item.snippet.channelTitle}
          publishDate={item.snippet.publishedAt}
          thumbnail={item.snippet.thumbnails.medium.url}
          title={item.snippet.title}
        />
      ))}
    </div>
  );
}
