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
    <Layout className='flex relative px-[80px] gap-4 pt-5 pb-10'>
      <div className='min-w-[750px] w-[750px] flex flex-col gap-3'>
        {/* Video IFRAME */}
        <div className='rounded-md relative overflow-hidden'>
          <LiteYouTubeEmbed
            id={id || ''}
            poster='maxresdefault'
            title='YouTube Embed'
          />
        </div>

        {id && <TitleAndDescription id={id} />}

        {/* Comments */}
        {id && <Comments videoId={id} />}
      </div>

      {/* Playlist */}
      <section className='w-full min-h-screen rounded-md px-2'>
        {channelId && <PlayList channelId={channelId} />}
      </section>
    </Layout>
  );
}
