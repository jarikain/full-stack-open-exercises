const supertest = require('supertest')
const mongoose = require('mongoose').default
const app = require('../app')
const testHelper = require('./test_helper')
const Blog = require('../models/blog')

const api = supertest(app)

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(testHelper.blogs)
})

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body).toHaveLength(testHelper.blogs.length)
})

test('blogs are returned in JSON format', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('blog identifier field is called "id"', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body[0].id).toBeDefined()
})

test('collection size increases when new blog document is added', async () => {
  await api
    .post('/api/blogs')
    .send(testHelper.blogs[0])

  const blogListSize = await testHelper.blogsInDB()
  expect(blogListSize).toHaveLength(testHelper.blogs.length + 1)
})

test('a new blog document is added correctly', async () => {
  const blogEntry = {
    title: 'Test Title',
    author: 'Test Author',
    url: 'localhost',
    likes: 99
  }

  await api
    .post('/api/blogs')
    .send(blogEntry)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogEntryOnDb = Blog.findOne(blogEntry).getFilter()
  expect(blogEntryOnDb).toEqual(blogEntry)
})

afterAll(async () => {
  await mongoose.connection.close()
})