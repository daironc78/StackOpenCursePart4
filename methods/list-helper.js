const dummy = (blogs) => {
  const result = blogs;
  return result.length === 0 ? 1 : 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  return blogs.length > 0 ? (({ title, author, likes }) => ({ title, author, likes }))(blogs.filter(blog => blog.likes === Math.max(...blogs.map(blog => blog.likes)))[0]) : {};
};

const mostBlogs = (blogs) => {
  const authors = blogs.map(blog => blog.author);
  const author = authors.sort((a, b) => authors.filter(author => author === a).length - authors.filter(author => author === b).length).pop();
  return { author, blogs: authors.filter(author => author === author).length };
};

const mostLikes = (blogs) => {
  const authors = blogs.map(blog => blog.author);
  const author = authors.sort((a, b) => blogs.filter(blog => blog.author === a).reduce((sum, blog) => sum + blog.likes, 0) - blogs.filter(blog => blog.author === b).reduce((sum, blog) => sum + blog.likes, 0)).pop();
  return { author, likes: blogs.filter(blog => blog.author === author).reduce((sum, blog) => sum + blog.likes, 0) };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};