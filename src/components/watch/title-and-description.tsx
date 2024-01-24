'use client';

import useVideoDetails from '@/hooks/useVideoDetails';
import SkeletonWatchPage from '../skeletons/watch-page';
import AuthorAndLikes from './author-and-likes';
import Description from './description';
import Head from 'next/head';

export default function TitleAndDescription({ id }: { id: string }) {
  const video = useVideoDetails({ id });
  if (!video?.title) return <SkeletonWatchPage />;

  return (
    video.title && (
      <article className='flex flex-col gap-3'>
        <Head>
          <title>{video.title}</title>
        </Head>

        {/* Title */}
        <h3 className='text-xl line-clamp-2 font-medium'>{video.title}</h3>

        {/* Author and likes */}
        <AuthorAndLikes
          authorName={video.author.name}
          channel_url={video.author.channel_url}
          subscriber_count={video.author.subscriber_count}
          thumbnail={video.author.thumbnails[1].url}
        />

        <Description
          channel_url={video.author.channel_url}
          description={video.description}
          name={video.author.name}
          publishDate={video.publishDate}
          subscriber_count={video.author.subscriber_count}
          thumbnail={video.author.thumbnails[1].url}
          title={video.title}
          viewCount={video.viewCount}
        />
      </article>
    )
  );
}
