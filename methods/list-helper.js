const logger = require("../utils/logger");

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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};