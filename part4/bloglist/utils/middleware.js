const logger = require('../utils/logger')

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error)

  if (error.name === 'ValidationError')
    response.status(400).json( { error: error.message } )

  if (error.name === 'CastError')
    return response.status(400).send({ error: 'bad id' })

  next(error)
}

module.exports = {
  unknownEndpoint,
  errorHandler
}