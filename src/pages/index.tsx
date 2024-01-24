import Layout from '@/components/layout';
import VideoList from '@/components/video-list';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout className={`${inter.className} flex flex-col relative`} title='Youtube'>
      <div className='px-[20px] grid md:grid-cols-3 gap-4 my-3 pb-10'>
        <VideoList />
      </div>
    </Layout>
  );
}
