import { ThemeProvider } from '@/components/dark-mode/theme-provider';
import DesktopNavbar from '@/components/navbar/desktop';
import MobileNavbar from '@/components/navbar/mobile';
import ChannelIdProvider from '@/context/channelId';
import VideosProvider from '@/context/videos';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'sonner';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
        <MobileNavbar />
        <DesktopNavbar />
        <Toaster position='top-right' />
        <VideosProvider>
          <ChannelIdProvider>
            <Component {...pageProps} />
          </ChannelIdProvider>
        </VideosProvider>
      </ThemeProvider>
    </>
  );
}
