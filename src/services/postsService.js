const { BlogPost, User, PostCategory, Category } = require('../models');

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

const insertPost = async (body, email) => {
  const { id: userId } = await User.findOne({ where: { email } }).then((r) => r.dataValues);

  const postCreated = await BlogPost.create({ ...body, userId }).then((r) => r.dataValues);
  body.categoryIds.map(async (id) => { 
    await PostCategory.create({ categoryId: id, postId: postCreated.id });
  });

  return { type: 201, data: postCreated };
};

const updatePost = async (body, id, email) => {
  const { id: userId } = await User.findOne({ where: { email } }).then((r) => r.dataValues);
  const { data: actualPost } = await getPostById(id);

  if (actualPost.userId !== userId) return { type: 401, data: { message: 'Unauthorized user' } };

  await BlogPost.update({ ...body }, { where: { id } });
  const postUpdated = {
    ...actualPost,
    title: body.title,
    content: body.content,
  };

  return { type: 200, data: postUpdated };
};

module.exports = {
  getPosts,
  getPostById,
  insertPost,
  updatePost,
};