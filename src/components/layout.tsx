import Head from 'next/head';

export default function Layout({
  children,
  className,
  title,
  description,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}) {
  return (
    <>
      <Head>
        <title>{title || 'Youtube Downloader'}</title>
        <meta name='description' content={description} />
      </Head>
      <main className={className}>{children}</main>
    </>
  );
}
