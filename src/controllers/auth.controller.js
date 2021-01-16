const User = require('../models/user.model')
const helpers = require('../helpers/index')
const bcrypt = require('bcrypt')
const saltRounds = 12
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid')

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body
    try {
      const response = await User.login(email)
      const user = response[0]
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          const token = jwt.sign(
            {
              data: user.id,
            },
            process.env.PRIVATE_KEY,
            {
              expiresIn: '10h',
            },
          )
          const newResponse = {
            idUser: user.id,
            token,
          }
          helpers.response(res, res.statusCode, newResponse, 'Login success')
        } else {
          helpers.response(res, 400, null, 'Wrong email or password', true)
        }
      })
    } catch (err) {
      helpers.response(res, 400, null, 'Wrong email or password', true)
    }
  },
  register: (req, res) => {
    const { name, username, email, password } = req.body

    bcrypt.hash(password, saltRounds, async function (err, hash) {
      try {
        const newUser = {
          id: uuidv4(),
          name,
          username,
          email: email.toLowerCase(),
          password: hash,
        }
        await User.signup(newUser)
        const responseUser = await User.getUserByEmail(email)
        const user = responseUser[0]
        delete user.password
        helpers.response(res, res.statusCode, user, helpers.status.insert)
      } catch (err) {
        helpers.response(res, 400, null, err, true)
      }
    })
  },
}

module.exports = authController
