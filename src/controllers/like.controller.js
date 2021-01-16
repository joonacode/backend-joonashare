const Post = require('../models/post.model')
const Like = require('../models/like.model')
const helpers = require('../helpers/index')

const likeController = {
  getByPostId: async (req, res) => {
    const id = req.params.id
    Post.getPostById(id)
      .then((resPost) => {
        if (resPost.length === 0) {
          return helpers.response(res, 400, [], 'Post not found', true)
        } else {
          Like.getLikeByIdPost(id)
            .then((response) => {
              helpers.response(res, 400, response, helpers.status.found)
            })
            .catch((err) => {
              return helpers.response(res, 400, [], err, true)
            })
        }
      })
      .catch((err) => {
        helpers.response(res, 400, [], err, true)
      })
  },
  likePost: async (req, res) => {
    const { post_id, user_id } = req.body
    Post.getPostById(post_id)
      .then((response) => {
        if (response.length === 0) {
          return helpers.response(res, 400, [], 'Post not found', true)
        } else {
          Like.checkLikeExists(post_id, user_id).then(async (resCheck) => {
            if (resCheck[0].totalFound === 0) {
              const resLikes = await Like.insert({ post_id, user_id })
              const newTotalLikes = await Like.getTotalLikeByIdPost(post_id)
              await Post.update(post_id, {
                total_likes: newTotalLikes[0].totalFound,
              })
              return helpers.response(res, 200, resLikes, helpers.status.insert)
            } else {
              const resLikes = await Like.delete(post_id, user_id)
              const newTotalLikes = await Like.getTotalLikeByIdPost(post_id)
              await Post.update(post_id, {
                total_likes: newTotalLikes[0].totalFound,
              })
              return helpers.response(res, 200, resLikes, helpers.status.insert)
            }
          })
        }
      })
      .catch((err) => {
        helpers.response(res, 400, [], err, true)
      })
  },
}

module.exports = likeController
