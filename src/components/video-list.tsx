'use client';
import useVideos from '@/hooks/useVideos';
import Card from './card/card';
import CardSkeleton from './skeletons/card-skeleton';

export default function VideoList() {
  const videos = useVideos();

  if (!videos)
    return Array.from({ length: 7 }).map((_, i) => <CardSkeleton key={i} />);

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
