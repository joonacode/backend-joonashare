const Post = require('../models/post.model')
const Comment = require('../models/comment.model')
const Like = require('../models/like.model')
const helpers = require('../helpers/index')
const { v4: uuidv4 } = require('uuid')

const user = {
  allPost: async (req, res) => {
    const id = req.userId
    try {
      const response = await Post.all(id)
      const result = response
      let arrBaru = []
      await Promise.all(
        result.map(async (post) => {
          let resComment = await Comment.getCommentByIdPost(post.id)
          let resLike = await Like.getLikeByIdPost(post.id)
          post.comments = resComment
          post.likes = resLike
          arrBaru.push(post)
        }),
      )
      helpers.response(res, 200, result, helpers.status.found)
    } catch (err) {
      helpers.response(res, 400, [], err, true)
    }
  },
  getPostUser: async (req, res) => {
    const id = req.params.id
    try {
      const response = await Post.postUser(id)
      const result = response
      let arrBaru = []
      await Promise.all(
        result.map(async (post) => {
          let resComment = await Comment.getCommentByIdPost(post.id)
          let resLike = await Like.getLikeByIdPost(post.id)
          post.comments = resComment
          post.likes = resLike
          arrBaru.push(post)
        }),
      )
      helpers.response(res, 200, result, helpers.status.found)
    } catch (err) {
      helpers.response(res, 400, [], err, true)
    }
  },
  detailPost: async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
      const response = await Post.getPostById(id)
      if (response.length === 0) {
        helpers.response(res, 400, [], helpers.status.notFound)
      } else {
        const result = response[0]
        helpers.response(res, 200, result, helpers.status.found)
      }
    } catch (err) {
      helpers.response(res, 400, [], err, true)
    }
  },
  createPost: async (req, res) => {
    const { description, user_id } = req.body
    const newPost = {
      id: uuidv4(),
      user_id,
      description,
      total_likes: 0,
      total_comments: 0,
    }
    if (req.file) {
      newPost.image = `${process.env.BASE_URL}/${req.file.path}`
    } else {
      return helpers.response(res, 400, [], 'Image required', true)
    }
    try {
      const response = await Post.create(newPost)
      const result = response
      helpers.response(res, 200, result, helpers.status.insert)
    } catch (err) {
      helpers.response(res, 400, [], err, true)
    }
  },
  updatePost: async (req, res) => {
    const id = req.params.id
    const { description } = req.body
    const updatePost = {
      description,
      updated_at: new Date(),
    }
    try {
      const response = await Post.update(id, updatePost)
      const result = response
      helpers.response(res, 200, result, helpers.status.update)
    } catch (err) {
      helpers.response(res, 400, [], err, true)
    }
  },

  deletePost: async (req, res) => {
    const id = req.params.id
    if (!id) {
      return helpers.response(res, 400, [], 'Id post required', true)
    }
    Post.getPostById(id)
      .then((response) => {
        if (response.length === 0) {
          return helpers.response(res, 400, [], 'Post not found', true)
        } else {
          Post.delete(id)
            .then(async (deletedPost) => {
              await Comment.deleteByIdPost(id)
              await Like.deleteByIdPost(id)
              helpers.response(res, 200, deletedPost, helpers.status.delete)
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
}

module.exports = user
