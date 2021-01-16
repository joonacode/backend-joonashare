const errorHandling = require('../helpers/errorHandling')
const User = require('../models/user.model')
const helpers = require('../helpers/index.js')

const userValidator = {
  USER_UPDATE_PROFILE: (req, res, next) => {
    const { name, username, bio } = req.body
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
        name: 'Bio',
        value: bio,
        type: 'string',
      },
    ]

    errorHandling(res, newCheck, async () => {
      const id = req.params.id
      if (username.split(' ').length > 1) {
        return helpers.response(
          res,
          400,
          null,
          'Username cannot contain spaces',
          true,
        )
      } else {
        User.getUserById(id)
          .then(async (response) => {
            response = response[0]
            if (response.username !== username) {
              let checkUsernameExist
              try {
                const responseUsername = await User.checkUsernameExist(username)
                checkUsernameExist = responseUsername[0].totalFound
              } catch (err) {
                return helpers.response(res, 400, [], err, true)
              }
              if (checkUsernameExist > 0) {
                return helpers.response(
                  res,
                  400,
                  [],
                  'Username already exist',
                  true,
                )
              } else {
                next()
              }
            } else {
              next()
            }
          })
          .catch((err) => {
            return helpers.response(res, 400, [], err, true)
          })
      }
    })
  },
}

module.exports = userValidator
