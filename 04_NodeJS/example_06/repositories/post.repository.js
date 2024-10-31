import Post from '../models/post.model.js';

export const createPost = async (postData) => {
  const post = new Post(postData);
  return await post.save();
};

export const findAllPosts = async () => {
  return await Post.find().populate('author', 'username email');
};

export const findPostsByUserId = async (userId) => {
  return await Post.find({ author: userId });
};
