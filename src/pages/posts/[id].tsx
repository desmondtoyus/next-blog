import React, { FC } from 'react';
import {
  GetStaticPropsContext,
  GetStaticPathsResult,
  GetStaticPropsResult,
} from 'next';
import Link from 'next/link';
import { getPost, getPosts } from '@/helpers';

export interface PostProps {
  id: number;
  title: string;
  body: string;
  pathId: number;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await getPosts();

  return {
    paths: posts.map(({ id }: { id: number }) => ({
      params: { id: String(id) },
    })),
    // paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const id = Number(params?.id?.[0] || 0);
  const data = await getPost(id);
  return {
    props: { ...data, pathId: id },
  };
}

const Post: FC<PostProps> = ({ title, body, pathId }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
      <br />
      <div>
        <span>
          <Link href={`/posts/${pathId - 1}`}>{'< Back'}</Link>
        </span>{' '}
        <span>
          <Link href={`/posts/${pathId + 1}`}>{'Next >'}</Link>
        </span>
      </div>
    </>
  );
};

export default React.memo(Post);
