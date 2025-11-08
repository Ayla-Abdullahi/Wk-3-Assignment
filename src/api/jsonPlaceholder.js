export const fetchPosts = async (page = 1, limit = 10) => {
  const start = (page - 1) * limit
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`)
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}
