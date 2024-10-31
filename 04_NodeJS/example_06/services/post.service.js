import * as postRepository from '../repositories/post.repository.js';

export const createNewPost = async (title, content, author) => {
  const newPost = await postRepository.createPost({ title, content, author });
  return newPost;
};

export const getAllPosts = async () => {
  return await postRepository.findAllPosts();
};

export const getPostsByUser = async (userId) => {
  return await postRepository.findPostsByUserId(userId);
};
