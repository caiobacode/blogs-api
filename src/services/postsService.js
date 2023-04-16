const { BlogPost } = require('../models');
const { User } = require('../models');
const { PostCategory } = require('../models');
const { Category } = require('../models');

const getPosts = async () => {
  // I placed .then(...) to no more need to get "dataValues" from an sequelize result, (0 === 'dataValues')
  const allPosts = await BlogPost.findAll().then((r) => r.map((s) => Object.values(s)[0]));
  const allUsers = await User.findAll().then((r) => r.map((s) => Object.values(s)[0]));
  const postCategory = await PostCategory.findAll().then((r) => r.map((s) => Object.values(s)[0]));
  const allCategories = await Category.findAll().then((r) => r.map((s) => Object.values(s)[0]));

  const allPostsFormated = allPosts.map((p) => {
    const actualUser = allUsers.find((u) => u.id === Number(p.userId));

    const actualPostCategories = postCategory.find((c) => c.postId === Number(p.userId));
    const categoriesArr = allCategories.filter((c) => c.id === actualPostCategories.categoryId);

    const postFormated = {
      ...p,
      user: { ...actualUser, password: undefined },
      categories: categoriesArr,
    };

    return postFormated;
  });

  return { type: 200, data: allPostsFormated };
};

const getPostById = async (id) => {
  const { data: allPosts } = await getPosts();
  const onePost = allPosts.find((p) => p.id === Number(id));

  if (!onePost) return { type: 404, data: { message: 'Post does not exist' } };
  
  return { type: 200, data: onePost };
};

module.exports = {
  getPosts,
  getPostById,
};