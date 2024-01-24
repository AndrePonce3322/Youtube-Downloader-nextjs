import Head from 'next/head';
import DesktopNavbar from './navbar/desktop';

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
      <DesktopNavbar />
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <main className={className}>{children}</main>
    </>
  );
}
