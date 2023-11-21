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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}