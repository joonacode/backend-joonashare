const errorHandling = require('../helpers/errorHandling')

const likeValidator = {
  LIKE_CREATELIKE: (req, res, next) => {
    const { post_id, user_id } = req.body
    const newCheck = [
      {
        name: 'PostId',
        value: post_id,
        type: 'string',
      },
      {
        name: 'UserId',
        value: user_id,
        type: 'string',
      },
    ]

    errorHandling(res, newCheck, async () => {
      next()
    })
  },
}

module.exports = likeValidator
