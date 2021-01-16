const router = require('express').Router()
const likeController = require('../controllers/like.controller')
const verifyToken = require('../middlewares/auth')

const { LIKE_CREATELIKE } = require('../middlewares/likeValidator')

router
  .get('/:id', verifyToken, likeController.getByPostId)
  .patch('/', verifyToken, LIKE_CREATELIKE, likeController.likePost)

module.exports = router
