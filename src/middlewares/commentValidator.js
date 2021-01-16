const errorHandling = require('../helpers/errorHandling')
const helpers = require('../helpers/index.js')
const Post = require('../models/post.model')
const User = require('../models/user.model')
const Comment = require('../models/comment.model')

const commentValidator = {
  COMMENT_INSERT: (req, res, next) => {
    const { post_id, user_id, comment } = req.body
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
      {
        name: 'Comment',
        value: comment,
        type: 'string',
      },
    ]

    errorHandling(res, newCheck, () => {
      Post.getPostById(post_id).then((resPost) => {
        if (resPost.length === 0) {
          return helpers.response(res, 400, [], 'Post not found', true)
        } else {
          User.getUserById(user_id).then((resUser) => {
            if (resUser.length === 0) {
              return helpers.response(res, 400, [], 'User not found', true)
            } else {
              next()
            }
          })
        }
      })
    })
  },
  COMMENT_DELETE: (req, res, next) => {
    const { post_id, user_id, comment_id } = req.body
    const myId = req.userId
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
      {
        name: 'CommentId',
        value: comment_id,
        type: 'string',
      },
    ]

    errorHandling(res, newCheck, () => {
      Comment.checkComment(comment_id, post_id, user_id).then((response) => {
        if (response[0].totalFound === 0) {
          return helpers.response(res, 400, [], 'Comment not found', true)
        } else {
          if (myId === user_id) {
            next()
          } else {
            return helpers.response(
              res,
              400,
              [],
              "You don't have permission to delete this comment",
              true,
            )
          }
        }
      })
    })
  },
}

module.exports = commentValidator
