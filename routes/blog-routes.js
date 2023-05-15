const express= require('express')
const router = express.Router();
const Blogs = require('../model/Blog')
const blogsController = require('../controllers/blogs-controllers')

router.get('/',blogsController.getAllBlogs)
router.get('/:id',blogsController.getBlogById)
router.post('/',blogsController.addBlog)
router.put('./:id',blogsController.updateBlog)
router.delete('./:id',blogsController.deleteBlog)

module.exports = router
