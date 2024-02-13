'use client';

import { VideosContext } from '@/context/videos';
import { Youtube } from '@/types/youtube-videos-props';
import { useContext, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './card/card';
import CardSkeleton from './skeletons/card-skeleton';

export default function VideoList() {
  const { setVideos, videos } = useContext(VideosContext);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    const nextPageToken = videos?.nextPageToken;
    console.log('fetchData', nextPageToken);

    if (!nextPageToken) return setHasMore(false);

    await fetch(`/api/videos?pageToken=${nextPageToken}`)
      .then((res) => res.json())
      .then((data: Youtube) => {
        setVideos({
          items: [...(videos?.items ?? []), ...data.items],
          nextPageToken: data.nextPageToken,
        });
      });
  };

  if (!videos) {
    return (
      <div className='md:px-[20px] grid md:grid-cols-3 gap-8 md:gap-4 md:my-3 pb-10 w-full'>
        {Array.from({ length: 7 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  const Loader = () =>
    Array.from({ length: 7 }).map((_, i) => <CardSkeleton key={i} />);

  return (
    <InfiniteScroll
      className='md:px-[20px] grid md:grid-cols-3 gap-8 md:gap-4 md:my-3 pb-10 w-full'
      dataLength={videos.items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<Loader />}
    >
      {videos.items.map((video) => (
        <Card
          key={video.id}
          id={video.id}
          author={video.snippet.channelTitle}
          channelID={video.snippet.channelId}
          src={video.snippet.thumbnails.high.url}
          time={video.snippet.publishedAt}
          title={video.snippet.title}
          views={video.statistics.viewCount}
        />
      ))}
    </InfiniteScroll>
  );
}
