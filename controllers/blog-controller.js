const BlogRouter = require("express").Router();
const BlogModel = require("../models/blog");

/**
 * Route to get all blogs.
 * @param {Object} request - Express request object.
 * @param {Object} response - Express response object.
 * @param {Function} next - Express next function.
 */
BlogRouter.get('/', (request, response) => {
  BlogModel.find({})
    .then(blogs => {
      response.json(blogs)
    });//.catch(error => next(error))
});

/**
 * Route to post a blog.
 * @param {Object} request - Express request object.
 * @param {Object} response - Express response object.
 * @param {Function} next - Express next function.
 */
BlogRouter.post('/', (request, response) => {
  const blog = new BlogModel(request.body);

  blog.save()
    .then(result => {
      response.status(201).json(result)
    });
});

module.exports = BlogRouter;