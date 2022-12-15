import React, { FC } from 'react';
import Link from 'next/link';
import { GetStaticPropsContext } from 'next';

export interface PageProps {
  title: string;
}

export async function getStaticProps(pageProps: GetStaticPropsContext) {
  // make async calls if necessary
  return {
    props: {
      title: 'Home',
    },
  };
}

const Home: FC<PageProps> = ({ title }) => {
  return (
    <>
      <main>
        <h1>{title}</h1>
        <ul>
          <li>
            <Link href="/posts/1">First Post</Link>
          </li>
        </ul>
      </main>
    </>
  );
};
export default React.memo(Home);
