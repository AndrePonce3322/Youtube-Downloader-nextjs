'use client';

import { PlayList } from '@/types/playlist-props';
import { useEffect, useState } from 'react';

export default function usePlaylist({ channelId }: { channelId: string }) {
  const [playlist, setPlaylist] = useState<any>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/playlist?q=${channelId}`);
      const data = (await res.json()) as PlayList;

      const videoId = data.items.map((item) => {
        const id = item.snippet.thumbnails.medium.url.split('/')[4];
        return id;
      });

      setPlaylist({ videoId, ...data });
    })();
  }, [channelId]);

  return playlist;
}
