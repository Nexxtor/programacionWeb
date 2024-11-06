import useFetch from '../hooks/useFetch';

const PostList = () => {
  const { data: posts, loading, error } = useFetch('/posts', {});

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts: {error}</p>;

  return (
    <ul>
      {posts.map(post => (
        <li key={post._id}>{post.content}</li>
      ))}
    </ul>
  );
};

export default PostList;
