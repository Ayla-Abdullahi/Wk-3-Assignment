// Use DummyJSON which returns English placeholder posts
// Docs: https://dummyjson.com/
export const fetchPosts = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit
  const res = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
  if (!res.ok) throw new Error('Failed to fetch posts')
  const data = await res.json()
  // DummyJSON returns { posts: [...], total, skip, limit }
  return data.posts || []
}
