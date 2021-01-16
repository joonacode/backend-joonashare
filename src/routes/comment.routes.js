const router = require('express').Router()
const commentController = require('../controllers/comment.controller')
const verifyToken = require('../middlewares/auth')

const {
  COMMENT_INSERT,
  COMMENT_DELETE,
} = require('../middlewares/commentValidator')

router
  .get('/:id', verifyToken, commentController.getByIdPost)
  .post('/', verifyToken, COMMENT_INSERT, commentController.insert)
  .delete('/', verifyToken, COMMENT_DELETE, commentController.delete)

module.exports = router
