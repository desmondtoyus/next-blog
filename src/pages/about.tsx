import React, { FC } from 'react';

export async function getStaticProps() {
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
