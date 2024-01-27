'use client';

import { Youtube } from '@/types/youtube-videos-props';
import { createContext, useEffect, useState } from 'react';

export const VideosContext = createContext({
  videos: {} as Youtube | undefined,
});

export const VideosProvider = ({ children }: { children: React.ReactNode }) => {
  const [videos, setVideos] = useState<Youtube>();

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/videos');
      const data = await res.json();
      setVideos(data);
    })();
  }, []);

  return (
    <VideosContext.Provider value={{ videos }}>
      {children}
    </VideosContext.Provider>
  );
};

export default VideosProvider;
