'use client';

import { ChannelIdContext } from '@/context/channelId';
import { FormatsVideoContext } from '@/context/formats';
import { RelatedVideosContext } from '@/context/related-videos';
import { useContext, useEffect, useState } from 'react';

export default function useVideoDetails({ id }: { id: string }) {
  const [video, setVideo] = useState<any>();
  const { setChannelId, channelId } = useContext(ChannelIdContext);

  // Separate contexts to get all data from info endpoint
  const { setRelatedVideos } = useContext(RelatedVideosContext)
  const { setFormats } = useContext(FormatsVideoContext)

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/info?q=${id}`);
      const data = await res.json();

      if (!data) return setVideo({ error: 'Video not found' });

      // Set all contexts
      setRelatedVideos(data.relatedVideos)
      setFormats(data.formats)

      const { videoDetails } = data;
      if (videoDetails.message === 'Status code: 410')
        return setVideo({ error: 'Video not found' });
      if (!channelId) setChannelId(videoDetails.author.id);
      setVideo({ ...videoDetails, error: false });
    })();
  }, [id, channelId]);

  return video;
}
