const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator/check')

const Blog = require('../../models/Blog')
const Comment = require('../../models/Comment')

// @route    POST api/blog/addorUpdate
// @desc     Create or Update a Blog in a sight
// @access   Private
router.post(
  '/addorUpdate/:site_id',
  [
    auth,
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('image', 'Image path is required')
      .not()
      .isEmpty(),
    check(
      'text',
      'Please enter a paragraph with 10 or more characters'
    ).isLength({ min: 10 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, image, text } = req.body

    const blogField = {}
    if (name) blogField.name = name
    if (image) blogField.image = image
    if (text) blogField.text = text

    try {
      let blog = await Blog.findOneAndUpdate(
        { name },
        { user: req.user.id, $set: blogField, site: req.params.site_id },
        { new: true, upsert: true }
      )

      const returnPack = await blog.save()

      res.json(returnPack)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
)

// @route    GET api/blog/site/:site_id
// @desc     Get all blogs from one site
// @access   Public
router.get('/site/:site_id', async (req, res) => {
  try {
    const blogs = await Blog.find({ site: req.params.site_id })
    res.json(blogs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/blog/user/:user_id
// @desc     Get blogs by user ID
// @access   Public
////////
router.get('/user/:user_id', async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.params.user_id })
    res.json(blogs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    DELETE api/blog/:blog_id
// @desc     Delete blog and comments in blog
// @access   Private
router.delete('/:blog_id', auth, async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({ _id: req.params.blog_id })

    await Comment.deleteMany({ blog: req.params.blog_id })

    await blog.save()

    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
