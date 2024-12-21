import { createPost } from '@/app/actions/demo/createPost';
import { getPosts } from '../actions/demo/getPosts';
import CounterComponent from '@/components/demo/Counter';
import styles from '@/styles/demo/CreatePostPage.module.scss';

const CreatePostPage = async () => {
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
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className={styles.postItem}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <small>User ID: {post.userId}</small>
          </li>
        ))}
      </ul>
      <CounterComponent />
    </div>
  );
};

export default CreatePostPage;
