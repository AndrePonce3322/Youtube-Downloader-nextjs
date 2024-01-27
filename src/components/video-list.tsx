'use client';

import useVideos from '@/hooks/useVideos';
import Card from './card/card';
import CardSkeletonList from './skeletons/card-skeleton-list';

export default function VideoList() {
  const videos = useVideos();

  if (!videos) return <CardSkeletonList />;

  return videos.items.map((video) => (
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
  ));
}
