'use client';

import { ChannelIdContext } from '@/context/channelId';
import { useContext, useEffect, useState } from 'react';

export default function useVideoDetails({ id }: { id: string }) {
  const [video, setVideo] = useState<any>();
  const { setChannelId, channelId } = useContext(ChannelIdContext);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/info?q=${id}`);
      const data = await res.json();
      if (data.message === 'Status code: 410')
        return setVideo({ error: 'Video not found' });
      if (!channelId) setChannelId(data.author.id);
      setVideo({ ...data, error: false });
    })();
  }, [id, channelId]);

  return video;
}
