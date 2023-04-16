const { BlogPost } = require('../models');
const { User } = require('../models');
const { PostCategory } = require('../models');
const { Category } = require('../models');

const getPosts = async () => {
  const allPosts = await BlogPost.findAll();
  const allUsers = await User.findAll();
  const allPostCategory = await PostCategory.findAll();
  const allCategory = await Category.findAll();
  const newAllPosts = allPosts.map((p) => {
    const actualUser = allUsers.find((u) => u.dataValues.id === Number(p.dataValues.userId));
    const actualPostCategory = allPostCategory
    .find((c) => c.dataValues.postId === Number(p.dataValues.userId));

    const actualCategories = allCategory
    .filter((c) => c.dataValues.id === actualPostCategory.dataValues.categoryId);
    const newPost = {
      ...p.dataValues,
      user: { ...actualUser.dataValues, password: undefined },
      categories: actualCategories,
    };
    return newPost;
  });
  return { type: 200, data: newAllPosts };
};

const getPostById = async (id) => {
  const { data: allPosts } = await getPosts();
  const onePost = allPosts.find((p) => p.id === +id);
  if (!onePost) return { type: 404, data: { message: 'Post does not exist' } };
  return { type: 200, data: onePost };
};

module.exports = {
  getPosts,
  getPostById,
};