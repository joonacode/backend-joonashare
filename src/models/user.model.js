const queryHelper = require('../helpers/query')

const user = {
  all: () => {
    return queryHelper(
      `SELECT id, name, username, email, created_at, updated_at FROM users`,
    )
  },
  getUserById: (id) => {
    return queryHelper('SELECT * FROM users WHERE id = ?', id)
  },
  getUserByEmail: (email) => {
    return queryHelper('SELECT * FROM users WHERE email = ?', email)
  },
  updateUser: (dataUser, id) => {
    return queryHelper('UPDATE users SET ? WHERE id = ?', [dataUser, id])
  },
  deleteUser: (id) => {
    return queryHelper('DELETE FROM users WHERE id = ?', id)
  },
  signup: (newUser) => {
    return queryHelper('INSERT INTO users SET ?', newUser)
  },
  login: (email) => {
    return queryHelper('SELECT * FROM users WHERE email = ?', email)
  },
  checkEmailExist: (email) => {
    return queryHelper(
      'SELECT COUNT(*) AS totalFound FROM users WHERE email = ?',
      email,
    )
  },
  checkUsernameExist: (username) => {
    return queryHelper(
      'SELECT COUNT(*) AS totalFound FROM users WHERE username = ?',
      username,
    )
  },
}

module.exports = user
