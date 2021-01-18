const queryHelper = require('../helpers/query')

const post = {
  all: (id) => {
    return queryHelper(
      `SELECT posts.*, users.username, users.id as userId, users.foto_profile as profileUser
      FROM posts as posts 
      INNER JOIN users as users 
      ON posts.user_id = users.id
      ORDER BY posts.created_at DESC 
      `,
    )
  },
  postUser: (id) => {
    return queryHelper(
      `SELECT posts.*, users.username, users.id as userId, users.foto_profile as profileUser
      FROM posts as posts 
      INNER JOIN users as users 
      ON posts.user_id = users.id
      WHERE posts.user_id = '${id}' ORDER BY posts.created_at DESC 
      `,
    )
  },
  getPostById: (id) => {
    return queryHelper(`SELECT * FROM posts WHERE id = ?`, id)
  },
  update: (id, data) => {
    return queryHelper(`UPDATE posts SET ? WHERE id = ?`, [data, id])
  },
  create: (data) => {
    return queryHelper(`INSERT INTO posts SET ?`, data)
  },
  delete: (id) => {
    return queryHelper(`DELETE FROM posts WHERE id = ?`, id)
  },
}

module.exports = post
