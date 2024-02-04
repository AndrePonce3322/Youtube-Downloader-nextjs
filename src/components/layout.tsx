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
        <meta
          name='description'
          content='Descarga tus videos favoritos con Youtube Downloader, fácil, rápido y accesible. creada por andrepg.vercel.app'
        />
      </Head>
      <main className={className}>{children}</main>
    </>
  );
}
