import { FC } from 'react';
import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';
import config from '@/config/seo.json';

export interface HeadProps {
  title?: string;
  description?: string;
}
const Head: FC<HeadProps> = ({ title = '', description = '' }) => {
  const pageSeo = title ? { ...config, title, description } : config;
  return (
    <header>
      <DefaultSeo {...pageSeo} />
      <NextHead>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      </NextHead>
    </header>
  );
};

export default Head;
