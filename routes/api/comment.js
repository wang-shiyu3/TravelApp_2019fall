const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator/check')

const Comment = require('../../models/Comment')
const Blog = require('../../models/Blog')

// @route    POST api/comment/addorUpdate
// @desc     Create or Update a Comment in a blog
// @access   Private
router.post(
  '/addorUpdate/:blog_id',
  [
    auth,
    check('name', 'Name is required')
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

    const { name, avatar, text } = req.body

    const commentField = {}
    if (name) commentField.name = name
    if (avatar) commentField.avatar = avatar
    if (text) commentField.text = text

    try {
      var t = await Blog.findOne({ _id: req.params.blog_id }).populate('site')

      let comment = await Comment.findOneAndUpdate(
        { name },
        {
          user: req.user.id,
          $set: commentField,
          blog: req.params.blog_id,
          site: t._id
        },
        { new: true, upsert: true }
      )

      const returnPack = await comment.save()

      res.json(returnPack)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
)

// @route    GET api/comment/blog/:blog_id
// @desc     Get all comments from one blog
// @access   Public
router.get('/blog/:blog_id', async (req, res) => {
  try {
    const comments = await Comment.find({ blog: req.params.blog_id })
    res.json(comments)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/comment/user/:user_id
// @desc     Get comments by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const comments = await Comment.find({ user: req.params.user_id })
    res.json(comments)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    DELETE api/comment/:comment_id
// @desc     Delete a comment
// @access   Private
router.delete('/:comment_id', auth, async (req, res) => {
  try {
    const comment = await Comment.findOneAndDelete({
      _id: req.params.comment_id
    })

    await comment.save()

    res.json(comment)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
