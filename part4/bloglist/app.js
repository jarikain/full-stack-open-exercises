const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const { unknownEndpoint } = require('./utils/middleware')
require('express-async-errors')

const app = express()

mongoose.set('strictQuery', false)
mongoose
  .connect(config.MONGODB_URI)
  .then(() => logger.info('connected to MongoDB'))
  .catch((error) => logger.error('error connecting to MongoDB', error.message))

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)

app.use(unknownEndpoint)

module.exports = app