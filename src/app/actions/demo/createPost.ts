'use server';

import { PostData } from '@/interfaces/actions/demo/postData';
import { PostResponse } from '@/interfaces/actions/demo/postResponse';

export async function createPost(postData: PostData): Promise<PostResponse> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  const data: PostResponse = await response.json();
  return data;
}
