const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const { AUTH_REGISTER, AUTH_LOGIN } = require('../middlewares/authValidator')

router
  .post('/login', AUTH_LOGIN, authController.login)
  .post('/register', AUTH_REGISTER, authController.register)

module.exports = router
