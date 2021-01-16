const connection = require('../config/db.config')
const helpers = require('./index')

module.exports = (query, queryData = null) => {
  return new Promise((resolve, reject) => {
    connection.query(query, queryData, (error, result) => {
      if (!error) {
        resolve(result)
      } else {
        const objError = {
          ...error,
          statusCode: helpers.errors.checkStatusCode(error.errno),
        }
        reject(objError)
      }
    })
  })
}
