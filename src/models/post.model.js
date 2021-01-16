const queryHelper = require('../helpers/query')

const post = {
  all: () => {
    return queryHelper(`SELECT * FROM posts`)
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
