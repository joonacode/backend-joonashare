const queryHelper = require('../helpers/query')

const like = {
  checkLikeExists: (postId, userId) => {
    return queryHelper(
      `SELECT count(*) as totalFound from post_likes WHERE post_id = ? AND user_id = ?`,
      [postId, userId],
    )
  },
  getTotalLikeByIdPost: (postId) => {
    return queryHelper(
      `SELECT COUNT(*) AS totalFound FROM post_likes WHERE post_id = ?`,
      postId,
    )
  },
  getLikeByIdPost: (postId) => {
    return queryHelper(`SELECT * FROM post_likes WHERE post_id = ?`, postId)
  },
  insert: (data) => {
    return queryHelper(`INSERT INTO post_likes SET ?`, data)
  },
  delete: (post_id, user_id) => {
    return queryHelper(
      `DELETE FROM post_likes WHERE post_id = ? AND user_id = ?`,
      [post_id, user_id],
    )
  },
}

module.exports = like
