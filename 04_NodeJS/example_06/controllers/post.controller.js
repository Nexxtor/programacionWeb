import * as postService from '../services/post.service.js';

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  const author = req.user.id;

  try {
    const newPost = await postService.createNewPost(title, content, author);
    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error: error.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  const userId = req.user.id;

  try {
    const posts = await postService.getPostsByUser(userId);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user posts', error: error.message });
  }
};
