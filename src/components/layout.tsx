import Head from 'next/head';

export default function Layout({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <>
      <Head>
        <title>{title || 'Youtube Downloader'}</title>

        <link rel='icon' href='/icon.png' />

        <meta
          name='description'
          content='Descarga tus videos favoritos con Youtube Downloader, fácil, rápido y accesible. creada por andrepg.vercel.app'
        />
        <meta property='og:title' content='Youtube Downloader' />
        <meta
          property='og:description'
          content='Descarga tus videos favoritos con Youtube Downloader, fácil, rápido y accesible. creada por andrepg.vercel.app'
        />
        <meta property='og:url' content='https://youtube-hn.vercel.app/' />
      </Head>
      <main className={className}>{children}</main>
    </>
  );
}
