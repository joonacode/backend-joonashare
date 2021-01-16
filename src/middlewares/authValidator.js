const errorHandling = require('../helpers/errorHandling')
const User = require('../models/user.model')
const helpers = require('../helpers/index.js')

const authValidator = {
  AUTH_REGISTER: (req, res, next) => {
    const { name, username, email, password } = req.body
    const newCheck = [
      {
        name: 'Name',
        value: name,
        type: 'string',
      },
      {
        name: 'Username',
        value: username,
        type: 'string',
      },
      {
        name: 'Email',
        value: email,
        type: 'string',
      },
      {
        name: 'Password',
        value: password,
        type: 'string',
      },
    ]

    errorHandling(res, newCheck, async () => {
      const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        email,
      )
      if (!checkEmail) {
        return helpers.response(res, 400, null, 'Invalid email', true)
      } else if (password.length < 6) {
        return helpers.response(
          res,
          400,
          null,
          'Password min 6 character',
          true,
        )
      } else if (username.split(' ').length > 1) {
        return helpers.response(
          res,
          400,
          null,
          'Username cannot contain space',
          true,
        )
      } else {
        let isEmailExist
        let isUsernameExist
        try {
          const resEmail = await User.checkEmailExist(email.toLowerCase())
          const resUsername = await User.checkUsernameExist(
            username.toLowerCase(),
          )
          isEmailExist = resEmail[0].totalFound
          isUsernameExist = resUsername[0].totalFound
        } catch (error) {
          return helpers.response(res, 400, null, error, true)
        }
        if (isEmailExist > 0) {
          return helpers.response(res, 400, null, 'Email already exist', true)
        } else if (isUsernameExist > 0) {
          return helpers.response(
            res,
            400,
            null,
            'Username already exist',
            true,
          )
        } else {
          next()
        }
      }
    })
  },
  AUTH_LOGIN: (req, res, next) => {
    const { email, password } = req.body
    const newCheck = [
      {
        name: 'Email',
        value: email,
        type: 'string',
      },
      {
        name: 'Password',
        value: password,
        type: 'string',
      },
    ]

    errorHandling(res, newCheck, () => {
      const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        email,
      )
      if (!checkEmail) {
        return helpers.response(res, 400, null, 'Invalid email', true)
      } else {
        next()
      }
    })
  },
}
module.exports = authValidator
