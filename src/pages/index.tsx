import React, { FC } from 'react';
import Link from 'next/link';
import { GetStaticPropsContext } from 'next';
import { getPosts } from '@/helpers';
import { PostProps } from './posts/[id]';

export interface PageProps {
  title: string;
  posts: PostProps[];
}

export async function getStaticProps(pageProps: GetStaticPropsContext) {
  const posts = await getPosts();

  return {
    props: {
      title: 'Home',
      posts,
    },
  };
}

const Home: FC<PageProps> = ({ title, posts }) => {
  return (
    <>
      <main>
        <h1>{title}</h1>
        <ul>
          {posts.map(
            ({ id, title: postTitle }) =>
              id > 0 && (
                <li>
                  <Link href={`/posts/${id}`}>{postTitle}</Link>
                </li>
              )
          )}
        </ul>
      </main>
    </>
  );
};
export default React.memo(Home);
