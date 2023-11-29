const express = require('express')
require('express-async-errors')
const mongoose = require('mongoose').default
const config = require('./utils/config')
const logger = require('./utils/logger')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const { unknownEndpoint, errorHandler } = require('./utils/middleware')

const app = express()

mongoose.set('strictQuery', false)
mongoose
  .connect(config.MONGODB_URI)
  .then(() => logger.info('connected to MongoDB'))
  .catch((error) => logger.error('error connecting to MongoDB', error.message))

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)

app.use(errorHandler)
app.use(unknownEndpoint)

module.exports = app