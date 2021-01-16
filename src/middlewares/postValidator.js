const errorHandling = require('../helpers/errorHandling')
const User = require('../models/user.model')
const Post = require('../models/post.model')
const helpers = require('../helpers/index.js')

const postValidator = {
  POST_CREATEPOST: (req, res, next) => {
    const { description, user_id } = req.body
    const newCheck = [
      {
        name: 'Description',
        value: description,
        type: 'string',
      },
      {
        name: 'UserId',
        value: user_id,
        type: 'string',
      },
    ]

    errorHandling(res, newCheck, async () => {
      let checkUser
      try {
        const user = await User.getUserById(user_id)
        checkUser = user[0].totalFound
      } catch (err) {
        return helpers.response(res, 400, [], 'User not found', true)
      }
      if (checkUser === 0) {
        return helpers.response(res, 400, [], 'User not found', true)
      } else {
        next()
      }
    })
  },
  POST_UPDATEPOST: (req, res, next) => {
    const { description, user_id } = req.body
    const newCheck = [
      {
        name: 'Description',
        value: description,
        type: 'string',
      },
      {
        name: 'UserId',
        value: user_id,
        type: 'string',
      },
    ]

    errorHandling(res, newCheck, async () => {
      const id = req.params.id
      Post.getPostById(id).then((response) => {
        if (response.length === 0) {
          return helpers.response(res, 400, [], 'Post not found', true)
        } else {
          User.getUserById(user_id).then((resUser) => {
            console.log(resUser)
            if (resUser.length === 0) {
              return helpers.response(res, 400, [], 'User not found', true)
            } else {
              if (user_id === response[0].user_id) {
                next()
              } else {
                return helpers.response(
                  res,
                  400,
                  [],
                  "You don't have permission to update this post",
                  true,
                )
              }
            }
          })
        }
      })
    })
  },
}

module.exports = postValidator
