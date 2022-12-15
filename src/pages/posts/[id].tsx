import React, { FC } from 'react';
import { GetStaticPropsContext, GetStaticPathsResult } from 'next';
import Link from 'next/link';
import { getPost } from '@/helpers';

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const id = Number(params?.id?.[0] || 0);
  const data = await getPost(id);
  return {
    props: { ...data, pathId: id },
  };
}

const FirstPost: FC<{ title: string; body: string, pathId: number }> = ({ title, body, pathId }) => {
  return (
    <div>
      <h1> {title} </h1>
      <p>{body}</p>
      <br />
      <div>
        <span>
          <Link href={`/posts/${pathId - 1}`}>
            {'< Back'}
          </Link>

        </span>
        {' '}
        <span>
          <Link href={`/posts/${pathId + 1}`}>
            {'Next >'}
          </Link>

        </span>
      </div>
    </div>
  );
};

export default React.memo(FirstPost);
