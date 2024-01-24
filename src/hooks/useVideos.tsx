'use client';
import { Youtube } from '@/types/youtube-videos-props';
import { useEffect, useState } from 'react';

export default function useVideos() {
  const [videos, setVideos] = useState<Youtube>();

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/videos');
      const data = await res.json();
      setVideos(data);
    })();
  }, []);

  return videos;
}
