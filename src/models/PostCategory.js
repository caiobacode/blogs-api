module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryId: DataTypes.INTEGER
  }, 
  {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'post_id',
      otherKey: 'category_id',
      through: PostCategory,
      as: 'blog_posts',
    });
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostCategory,
      as: 'categories',
    });
  };
  
  return PostCategory;
}
