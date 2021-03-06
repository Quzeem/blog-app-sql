const express = require('express');
const router = express.Router();

const {
  getAllBlogs,
  newBlogForm,
  addNewBlog,
  showMoreBlogInfo,
  editBlogForm,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogsController');

router.get('/', getAllBlogs);
router.get('/new', newBlogForm);
router.post('/', addNewBlog);
router.get('/:id', showMoreBlogInfo);
router.get('/:id/edit', editBlogForm);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
