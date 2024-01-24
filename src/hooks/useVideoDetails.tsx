'use client';

import { ChannelIdContext } from '@/context/channelId';
import { VideoDetails } from '@/types/video-details-info';
import { useContext, useEffect, useState } from 'react';

export default function useVideoDetails({ id }: { id: string }) {
  const [video, setVideo] = useState<VideoDetails>();
  const { setChannelId, channelId } = useContext(ChannelIdContext);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/info?q=${id}`);
      const data = (await res.json()) as VideoDetails;
      if (!channelId) setChannelId(data.author.id);
      setVideo(data);
    })();
  }, [id]);

  return video;
}
