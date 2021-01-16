const User = require('../models/user.model')
const helpers = require('../helpers/index')

const user = {
  allUser: async (req, res) => {
    try {
      const response = await User.all()
      const result = response
      helpers.response(res, 200, result, helpers.status.found)
    } catch (err) {
      helpers.response(res, 400, [], err, true)
    }
  },
  detailUser: async (req, res) => {
    const id = req.params.id
    try {
      const response = await User.getUserById(id)
      const result = response[0]
      delete result.password
      helpers.response(res, 200, result, helpers.status.found)
    } catch (err) {
      helpers.response(res, 400, [], err, true)
    }
  },
  updateUser: (req, res) => {
    const { name, username, bio } = req.body
    const id = req.params.id
    if (req.uploadErrorMessage)
      return helpers.response(res, 400, [], req.uploadErrorMessage, true)
    const newDataUser = {
      name,
      username: username.toLowerCase(),
      bio,
    }
    if (req.file) {
      newDataUser.foto_profile = `${process.env.BASE_URL}/${req.file.path}`
    }
    User.updateUser(newDataUser, id)
      .then((response) => {
        helpers.response(res, 200, [], helpers.status.update)
      })
      .catch((err) => {
        helpers.response(res, 400, [], err, true)
      })
  },
}

module.exports = user
