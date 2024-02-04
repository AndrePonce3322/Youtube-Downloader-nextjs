import Layout from '@/components/layout';
import VideoList from '@/components/video-list';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout className={`${inter.className} flex flex-col relative`}>
      <VideoList />
    </Layout>
  );
}
