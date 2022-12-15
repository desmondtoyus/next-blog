import React, { FC } from 'react';
import { GetStaticPropsContext } from 'next';

export async function getStaticProps(pageProps: GetStaticPropsContext) {
  // make async calls if necessary
  return {
    props: {
      title: 'About Us',
    },
  };
}

export interface PageProps {
  title: string;
}

const About: FC<PageProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
export default React.memo(About);
