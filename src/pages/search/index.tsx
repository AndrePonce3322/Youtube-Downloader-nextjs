'use client';
import Card from '@/components/card/card';
import Layout from '@/components/layout';
import CardSkeleton from '@/components/skeletons/card-skeleton';
import CardSkeletonList from '@/components/skeletons/card-skeleton-list';
import { SearchVideoProps } from '@/types/search-props';
import { Youtube } from '@/types/youtube-videos-props';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function InputSearchVideo() {
  const query = useSearchParams();
  const search = query.get('q');
  const [videos, setVideos] = useState<any>();
  const [pageToken, setPageToken] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!search) return;

    (async () => {
      const res = await fetch(`/api/search?q=${search}`);
      const data = (await res.json()) as SearchVideoProps;
      setVideos(data);
      setPageToken(data.nextPageToken);
    })();
  }, [search]);

  const fetchMoreVideos = async () => {
    const nextPageToken = videos?.nextPageToken;
    console.log('fetchData', nextPageToken);

    if (!nextPageToken) return setHasMore(false);

    await fetch(`/api/search?q=${search}&pageToken=${pageToken}`)
      .then((res) => res.json())
      .then((data: Youtube) => {
        setVideos({
          items: [...(videos?.items ?? []), ...data.items],
          nextPageToken: data.nextPageToken,
        });
      });
  };

  if (!videos?.items)
    return (
      <div className='md:px-[20px] grid md:grid-cols-3 gap-4 my-3 pb-10'>
        <CardSkeletonList />
      </div>
    );

  const Loader = () =>
    Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />);

  return (
    <Layout title={`${search} - Youtube`}>
      <InfiniteScroll
        className='md:px-[20px] grid md:grid-cols-3 gap-8 md:gap-4 md:my-3 pb-10 w-full'
        dataLength={videos.items.length} //This is important field to render the next data
        next={fetchMoreVideos}
        hasMore={hasMore}
        loader={<Loader />}
      >
        {videos.items.map((video: any) => (
          <Card
            key={video.id}
            id={video.id}
            author={video.snippet.channelTitle}
            channelID={video.snippet.channelId}
            src={video.snippet.thumbnails.high.url}
            time={video.snippet.publishedAt}
            title={video.snippet.title}
            views={'ola'}
          />
        ))}
      </InfiniteScroll>
    </Layout>
  );
}
