const queryHelper = require('../helpers/query')

const comment = {
  getTotalCommentByIdPost: (postId) => {
    return queryHelper(
      `SELECT COUNT(*) AS totalFound from post_comments WHERE post_id = ?`,
      postId,
    )
  },
  getCommentByIdPost: (postId) => {
    return queryHelper(`SELECT * FROM post_comments WHERE post_id = ?`, postId)
  },
  checkComment: (commentId, postId, userId) => {
    return queryHelper(
      `SELECT COUNT(*) AS totalFound FROM post_comments WHERE id = ? AND post_id = ? AND user_id = ?`,
      [commentId, postId, userId],
    )
  },
  insert: (data) => {
    return queryHelper(`INSERT INTO post_comments SET ?`, data)
  },
  delete: (commentId, postId, userId) => {
    return queryHelper(
      `DELETE FROM post_comments WHERE id = ? AND post_id = ? AND user_id = ?`,
      [commentId, postId, userId],
    )
  },
}

module.exports = comment
