const router = require('express').Router()
const userController = require('../controllers/user.controller')
const verifyToken = require('../middlewares/auth')
const uploadFile = require('../middlewares/multer')

const { USER_UPDATE_PROFILE } = require('../middlewares/userValidator')

router
  .get('/', verifyToken, userController.allUser)
  .get('/:id', verifyToken, userController.detailUser)
  .patch(
    '/:id',
    verifyToken,
    uploadFile,
    USER_UPDATE_PROFILE,
    userController.updateUser,
  )

module.exports = router
