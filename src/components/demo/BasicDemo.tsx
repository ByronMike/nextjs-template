import { createPost } from '@/app/actions/demo/createPost';
import { getPosts } from '@/app/actions/demo/getPosts';
import CounterComponent from '@/components/demo/CounterDemo';
import { cn } from '@/lib/utils';
import styles from '@/styles/demo/CreatePostPage.module.scss';

const BasicDemo = async () => {
  async function handleSubmit(formData: FormData): Promise<void> {
    'use server';

    const title = formData.get('title') as string;
    const body = formData.get('body') as string;
    const userId = 1; // Demo user ID

    try {
      const newPost = await createPost({ title, body, userId });
      console.log('Post created:', newPost);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h2>Create a Post</h2>
      <form action={handleSubmit} className={styles.form}>
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <br />
        <label>
          Body:
          <textarea name="body" required></textarea>
        </label>
        <br />
        <button type="submit">Create Post</button>
      </form>
      <h2>Get Posts</h2>
      <ul className={styles.postsList}>
        {posts.slice(0, 10).map((post, index) => {
          return (
            <li
              key={post.id}
              className={cn(index % 2 === 0 ? 'bg-gray-100' : 'bg-orange-400')}
            >
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <small className="text-accent">User ID: {post.userId}</small>
            </li>
          );
        })}
      </ul>
      <CounterComponent />
    </div>
  );
};

export default BasicDemo;
