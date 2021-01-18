const router = require('express').Router()
const postController = require('../controllers/post.controller')
const verifyToken = require('../middlewares/auth')
const uploadFile = require('../middlewares/multer')

const {
  POST_CREATEPOST,
  POST_UPDATEPOST,
} = require('../middlewares/postValidator')

router
  .get('/', verifyToken, postController.allPost)
  .get('/post-user/:id', verifyToken, postController.getPostUser)
  .get('/:id', verifyToken, postController.detailPost)
  .patch('/:id', verifyToken, POST_UPDATEPOST, postController.updatePost)
  .post(
    '/',
    verifyToken,
    uploadFile,
    POST_CREATEPOST,
    postController.createPost,
  )
  .delete('/:id', verifyToken, postController.deletePost)

module.exports = router
