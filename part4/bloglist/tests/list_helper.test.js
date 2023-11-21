const { dummy, totalLikes, favoriteBlog } = require('../utils/list_helper')
const blogs = [
  {
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7
  },
  {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5
  },
  {
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12
  },
  {
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10
  },
  {
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0
  },
  {
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2
  }
]

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
      blogs[index]
    ])

    expect(result).toBe(blogs[index].likes)
  })

  test('of a bigger list is calculated right', () => {
    const testListTotal = blogs.reduce(
      (total, blog) => total + blog.likes
      , 0)
    const result = totalLikes(blogs)

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
    const result = favoriteBlog(blogs)

    expect(result).toEqual({
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12
    })
  })
})