const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')
const Post = require('../../models/Post')
const Profile = require('../../models/Profile')
const validatePostInput = require('../../validation/post')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.filename)
  }
})

const upload = multer({ storage })

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public

router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }))

// @route   GET api/posts
// @desc    Get posts
// @access  Public

router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }))
})

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public

router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: 'No post found with that ID' })
    )
})

// @route   POST api/posts
// @desc    Create post
// @access  Private

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const newPost = new Post({
      name: req.body.name,
      street: req.body.street,
      zip: req.body.zip,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      user: req.user.id
    })
    newPost.save().then(post => res.json(post))
  }
)

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' })
          }
          post.remove().then(() => res.json({ success: true }))
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
    })
  }
)

// @route   POST api/posts/like/:id
// @desc    Like post
// @access  Private

router.post(
  '/like/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check id user already likes the post
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: 'User already liked this post' })
          }
          // Add user id to likes array
          post.likes.unshift({ user: req.user.id })
          post.save().then(post => res.json(post))
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
    })
  }
)

// @route   POST api/posts/unlike/:id
// @desc    unlike post
// @access  Private

router.post(
  '/unlike/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check id user already likes the post
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length === 0
          ) {
            return res
              .status(400)
              .json({ notliked: 'You have not yet liked this post' })
          }
          // Get user index
          const removeIndex = post.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id)

          // Splice out of array
          post.likes.splice(removeIndex, 1)

          // Save
          post.save().then(post => res.json(post))
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
    })
  }
)

// @route   POST api/posts/comment/:id
// @desc    Add comment to post
// @access  Private
router.post(
  '/comment/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    Post.findById(req.params.id)
      .then(post => {
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id
        }

        // Add to comments array
        post.comments.unshift(newComment)

        // Save
        post.save().then(post => res.json(post))
      })
      .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
  }
)

// @route   DELETE api/post/comment/:id
// @desc    Remove comment from post
// @access  Private

router.delete(
  '/comment/:id/:comment_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        // Check to see if comment exists
        if (
          post.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ commentnotexists: 'Comment does not exist' })
        }

        // Get remove index
        const removeIndex = post.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id)

        // Splice comment out of array
        post.comments.splice(removeIndex, 1)

        post.save().then(post => res.json(post))
      })
      .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
  }
)

// @route   POST api/posts/picture/:id
// @desc    add picture
// @access  Private

router.post(
  '/picture/:id',
  passport.authenticate('jwt', { session: false }),
  upload.single('image'),
  (req, res) => {
    // Post.findById(req.params.id)
    //   .then(post => {
    //     const pic = {
    //       name: req.body.name,
    //       img: req.file.path
    //     }
    //     post.pictures.unshift(pic)
    //     post.save().then(post => res.json(post))
    //   })
    //   .catch(err => res.status(404).json({ postnotfound: 'Post not found' }))
  }
)

module.exports = router
