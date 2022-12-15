import { readFile } from 'fs/promises';

export async function getPost(id: number) {
  try {
    const data = await readFile(`src/content/posts.json`, 'utf8');
    const posts = JSON.parse(data);
    const p =  posts.find(
      (post: { id: number; title: string; body: string }) => post.id === id,
    );
    return p || posts[0];
  } catch (error) {
    console.error('errror== ', error);
  }

}
