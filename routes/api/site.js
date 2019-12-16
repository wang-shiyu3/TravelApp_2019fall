const express = require('express')
const router = express.Router()
const adminAuth = require('../../middleware/admin')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator/check')

const Site = require('../../models/Site')
const Blog = require('../../models/Blog')
const Comment = require('../../models/Comment')

// @route    POST api/site/addorUpdate
// @desc     Create or Update a Site
// @access   Private
router.post(
  '/addorUpdate',
  [
    adminAuth,
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check(
      'description',
      'Please enter a paragraph with 10 or more characters'
    ).isLength({ min: 10 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, image, description } = req.body

    const siteFields = {}
    if (name) siteFields.name = name
    if (image) siteFields.image = image
    if (description) siteFields.description = description

    try {
      let site = await Site.findOneAndUpdate(
        { name },
        { $set: siteFields },
        { new: true, upsert: true }
      )

      const returnPack = await site.save()

      res.json(returnPack)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
)

// @route    GET api/site
// @desc     Get all sites
// @access   Public
router.get('/', async (req, res) => {
  try {
    const sites = await Site.find()
    res.json(sites)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/site/:site_id
// @desc     Get site by user ID
// @access   Public
router.get('/:site_id', async (req, res) => {
  try {
    const site = await Site.findOne({
      _id: req.params.site_id
    })
    if (!site) return res.status(400).json({ msg: 'Site not found' })

    res.json(site)
  } catch (err) {
    console.error(err.message)
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Site not found' })
    }
    res.status(500).send('Server Error')
  }
})

// @route    DELETE api/site/:site_id
// @desc     Delete experience from profile
// @access   Private
router.delete('/:site_id', adminAuth, async (req, res) => {
  try {
    //Delete comments
    await Comment.deleteMany({ site: req.params.site_id })
    //Delete blogs
    await Blog.deleteMany({ site: req.params.site_id })
    //Delete site
    const site = await Site.findOneAndDelete({ _id: req.params.site_id })
    res.json(site)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
