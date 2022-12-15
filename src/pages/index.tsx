import React, { FC } from 'react';
import Link from 'next/link';
import { getPosts } from '@/helpers';
import { PostProps } from './posts/[id]';

export interface PageProps {
  title: string;
  posts: PostProps[];
}

export async function getStaticProps() {
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
                <li key={id}>
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
