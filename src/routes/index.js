const express = require('express')
const router = express.Router()

const userRoutes = require('./user.routes')
const authRoutes = require('./auth.routes')
const postRoutes = require('./post.routes')
const likeRoutes = require('./like.routes')
const commentRoutes = require('./comment.routes')

router
  .use('/auth', authRoutes)
  .use('/user', userRoutes)
  .use('/post', postRoutes)
  .use('/like', likeRoutes)
  .use('/comment', commentRoutes)

module.exports = router
