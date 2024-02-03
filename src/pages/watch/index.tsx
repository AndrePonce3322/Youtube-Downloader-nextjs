'use client';
import Layout from '@/components/layout';
import PlayList from '@/components/playlist/playlist';
import Comments from '@/components/watch/comments/comments';
import TitleAndDescription from '@/components/watch/title-and-description';
import { ChannelIdContext } from '@/context/channelId';
import { useSearchParams } from 'next/navigation';
import { useContext } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function Watch() {
  const { channelId } = useContext(ChannelIdContext);
  const watch = useSearchParams();
  const id = watch.get('v');

  return (
    <Layout className='flex md:flex-row flex-col relative md:px-[80px] gap-4 md:pt-5 pb-10'>
      <div className='w-full md:min-w-[750px] md:w-[750px] flex flex-col gap-3'>
        {/* Video IFRAME */}
        <div className='md:rounded-md relative overflow-hidden'>
          {id ? (
            <LiteYouTubeEmbed id={id} title='YouTube Embed' />
          ) : (
            <div className='w-full aspect-video bg-[#e3e3e3] dark:bg-muted animate-pulse'></div>
          )}
        </div>

        {id && <TitleAndDescription id={id} />}
        {id && <Comments videoId={id} />}
      </div>

      {/* Playlist */}
      <section className='w-full min-h-screen rounded-md px-2'>
        {channelId && <PlayList channelId={channelId} />}
      </section>
    </Layout>
  );
}
