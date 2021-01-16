const Post = require('../models/post.model')
const Comment = require('../models/comment.model')
const helpers = require('../helpers/index')

const commentController = {
  getByIdPost: (req, res) => {
    const id = req.params.id
    Post.getPostById(id)
      .then((resPost) => {
        if (resPost.length === 0) {
          return helpers.response(res, 400, [], 'Post not found', true)
        } else {
          Comment.getCommentByIdPost(id)
            .then((resComment) => {
              return helpers.response(
                res,
                200,
                resComment,
                helpers.status.found,
              )
            })
            .catch((err) => {
              helpers.response(res, 400, [], err, true)
            })
        }
      })
      .catch((err) => {
        helpers.response(res, 400, [], err, true)
      })
  },
  insert: async (req, res) => {
    const { post_id, user_id, comment } = req.body
    const newComment = {
      post_id,
      user_id,
      comment,
    }

    try {
      await Comment.insert(newComment)
      const resComment = await Comment.getTotalCommentByIdPost(post_id)
      const resTotalComment = resComment[0].totalFound
      await Post.update(post_id, { total_comments: resTotalComment })
      helpers.response(res, 400, resTotalComment, helpers.status.insert)
    } catch (err) {
      helpers.response(res, 400, [], err, true)
    }
  },
  delete: async (req, res) => {
    const { user_id, post_id, comment_id } = req.body
    try {
      const response = await Comment.delete(comment_id, post_id, user_id)
      const totalComment = await Comment.getTotalCommentByIdPost(post_id)
      await Post.update(post_id, { total_comments: totalComment[0].totalFound })
      helpers.response(res, 400, response, helpers.status.delete)
    } catch (err) {
      helpers.response(res, 400, [], err, true)
    }
  },
}

module.exports = commentController
