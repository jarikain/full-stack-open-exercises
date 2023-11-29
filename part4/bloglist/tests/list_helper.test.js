const testHelper = require('./test_helper')
const {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
} = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {

  test('of empty list is zero', () => {
    const result = totalLikes([])

    expect(result).toBe(0)
  })

  test('when list has only one blog equals the likes of that', () => {
    const index = 0
    const result = totalLikes([
      testHelper.blogs[index]
    ])

    expect(result).toBe(testHelper.blogs[index].likes)
  })

  test('of a bigger list is calculated right', () => {
    const testListTotal = testHelper.blogs.reduce(
      (total, blog) => total + blog.likes
      , 0)
    const result = totalLikes(testHelper.blogs)

    expect(result).toBe(testListTotal)
  })
})

describe('favorite blog', () => {

  test('is empty blog object if list is empty', () => {
    const result = favoriteBlog([])

    expect(result).toEqual({
      title: '',
      author: '',
      url: '',
      likes: 0
    })
  })

  test('is the blog object with most likes', () => {
    const result = favoriteBlog(testHelper.blogs)

    expect(result).toEqual({
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12
    })
  })
})

describe('most testHelper.blogs', () => {

  test('shows the right author and blog count', () => {
    const result = mostBlogs(testHelper.blogs)

    expect(result).toEqual({
      author: 'Robert C. Martin',
      blogs: 3
    })
  })

  test('returns empty values for fields if input is empty array', () => {
    const result = mostBlogs([])

    expect(result).toEqual({
      author: '',
      blogs: 0
    })
  })
})

describe('most likes', () => {

  test('shows the right author and likes count', () => {
    const result = mostLikes(testHelper.blogs)

    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 17
    })
  })

  test('returns empty values for fields if input is empty array', () => {
    const result = mostLikes([])

    expect(result).toEqual({
      author: '',
      likes: 0
    })
  })
})