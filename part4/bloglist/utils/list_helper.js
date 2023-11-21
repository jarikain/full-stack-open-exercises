const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce(
    (total, blog) => total + blog.likes
    , 0)
}

const favoriteBlog = (blogs) => {
  const highestLikes = Math.max(...blogs.map(blog => blog.likes))

  return blogs.find(blog => blog.likes === highestLikes)
    ?? {
      title: '',
      author: '',
      url: '',
      likes: 0
    }
}

const mostBlogs = (blogs) => {
  const blogCounts = blogs.reduce((counts, blog) => {
    counts[blog.author] = (counts[blog.author] || 0) + 1
    return counts
  }
  , {})

  const authors = Object.keys(blogCounts)
  const mostFrequentAuthor = authors.reduce((topAuthor, author) =>
    blogCounts[author] > blogCounts[topAuthor]
      ? author
      : topAuthor
  , authors[0])

  return {
    author: mostFrequentAuthor ?? '',
    blogs: blogCounts[mostFrequentAuthor] || 0
  }
}

const mostLikes = (blogs) => {
  const blogLikes = blogs.reduce((counts, blog) => {
    counts[blog.author] = (counts[blog.author] || 0) + blog.likes
    return counts
  }
  , {})

  const authors = Object.keys(blogLikes)
  const mostLikesAuthor = authors.reduce((topAuthor, author) =>
    blogLikes[author] > blogLikes[topAuthor]
      ? author
      : topAuthor
  , authors[0])

  return {
    author: mostLikesAuthor ?? '',
    likes: blogLikes[mostLikesAuthor] || 0
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}