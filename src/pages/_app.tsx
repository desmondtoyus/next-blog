import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { Head } from '@/components/common/Head';

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log('pageProps == ', pageProps);
  return (
    <>
      <Head {...pageProps} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
