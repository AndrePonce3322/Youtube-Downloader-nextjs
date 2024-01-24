import { ThemeProvider } from '@/components/dark-mode/theme-provider';
import ChannelIdProvider from '@/context/channelId';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <ChannelIdProvider>
          <Component {...pageProps} />
        </ChannelIdProvider>
      </ThemeProvider>
    </>
  );
}
