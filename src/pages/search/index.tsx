'use client';

import Card from '@/components/card/card';
import Layout from '@/components/layout';
import { SearchVideoProps } from '@/types/search-props';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function InputSearchVideo() {
  const query = useSearchParams();
  const search = query.get('q');
  const [videos, setVideos] = useState<SearchVideoProps>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/search?q=${search}`);
      const data = (await res.json()) as SearchVideoProps;
      setVideos(data);
    })();
  }, [search]);

  if (!videos?.items)
    return <Layout className='px-5 pt-5'>No hay videos</Layout>;

  return (
    <Layout title={`${search} - Youtube`}>
      <div className='px-[20px] grid md:grid-cols-3 gap-4 my-3 pb-10'>
        {videos?.items.map((video) => (
          <Card
            author={video.snippet.channelTitle}
            channelID={video.snippet.channelId}
            id={video.id.videoId}
            src={video.snippet.thumbnails.medium.url}
            time={video.snippet.publishedAt}
            title={video.snippet.title}
            views={video.snippet.channelTitle}
            key={video.id.videoId}
          />
        ))}
      </div>
    </Layout>
  );
}