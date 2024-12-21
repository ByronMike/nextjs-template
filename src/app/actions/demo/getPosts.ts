'use server';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data: Post[] = await response.json();
  return data;
}
