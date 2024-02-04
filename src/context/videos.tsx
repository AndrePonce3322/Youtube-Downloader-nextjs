'use client';

import { Youtube } from '@/types/youtube-videos-props';
import { createContext, useEffect, useState } from 'react';

export const VideosContext = createContext({
  videos: {} as Youtube | undefined,
  setVideos: (videos: any) => {},
  pageToken: '' as string | null,
});

export const VideosProvider = ({ children }: { children: React.ReactNode }) => {
  const [videos, setVideos] = useState<Youtube>();
  const [pageToken, setPageToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/videos');
      const data = (await res.json()) as Youtube;
      setVideos(data);
      setPageToken(data.nextPageToken);
    })();
  }, [pageToken]);

  return (
    <VideosContext.Provider value={{ videos, setVideos, pageToken }}>
      {children}
    </VideosContext.Provider>
  );
};

export default VideosProvider;
