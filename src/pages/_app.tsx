import { ThemeProvider } from '@/components/dark-mode/theme-provider';
import DesktopNavbar from '@/components/navbar/desktop';
import MobileNavbar from '@/components/navbar/mobile';
import ChannelIdProvider from '@/context/channelId';
import VideosProvider from '@/context/videos';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'sonner';
import { Analytics } from "@vercel/analytics/react"
import { FormatsVideoProvider } from '@/context/formats';
import { RelatedVideosProvider } from '@/context/related-videos';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
        {/* Vercel analytics */}
        <Analytics />
        {/* Navbar */}
        <MobileNavbar />
        <DesktopNavbar />

        {/* Toaster */}
        <Toaster position='top-right' />

        {/* All Videos Provider */}
        <VideosProvider>
          {/* ChannelIdProvider */}
          <ChannelIdProvider>
            {/* FormatsVideoProvider */}
            <FormatsVideoProvider>
              {/* RelatedVideosProvider */}
              <RelatedVideosProvider>
                {/* Component */}
                <Component {...pageProps} />
              </RelatedVideosProvider>
            </FormatsVideoProvider>
          </ChannelIdProvider>
        </VideosProvider>
      </ThemeProvider>
    </>
  );
}
