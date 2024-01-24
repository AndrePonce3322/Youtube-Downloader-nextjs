'use client';

import usePlaylist from '@/hooks/usePlaylist';
import PlayListCard from './card';
import PlayListCardSkeleton from '../skeletons/playlist-card';

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
