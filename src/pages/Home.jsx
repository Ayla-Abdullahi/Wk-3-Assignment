import React, { useEffect, useMemo, useState } from 'react'
import TaskManager from '../components/TaskManager'
import Card from '../components/Card'
import { fetchPosts } from '../api/jsonPlaceholder'
import Button from '../components/Button'

const Home = () => {
  // API state
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  // No translation - JSONPlaceholder posts are already in English

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
      fetchPosts(page, 6)
      .then((data) => {
        if (!cancelled) setPosts(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || 'Error')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [page])

  const filtered = useMemo(() => {
    if (!query) return posts
    return posts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()) || p.body.toLowerCase().includes(query.toLowerCase()))
  }, [posts, query])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <h2 className="text-2xl font-bold mb-4">API Posts</h2>

            <div className="flex gap-2 mb-4">
              <input
                className="flex-1 px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="Search posts..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button onClick={() => setQuery('')} variant="secondary">Clear</Button>
              {/* Reload posts from JSONPlaceholder (English) without translation */}
              <Button
                onClick={async () => {
                  setLoading(true)
                  setError(null)
                  try {
                    const data = await fetchPosts(page, 6)
                    setPosts(data)
                  } catch (e) {
                    setError(e.message || 'Error')
                  } finally {
                    setLoading(false)
                  }
                }}
                variant="secondary"
                disabled={loading}
              >
                {loading ? 'Reloading…' : 'Reload posts (English)'}
              </Button>
            </div>


            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <ul className="space-y-3">
                {filtered.map((p) => (
                  <li key={p.id} className="p-3 border rounded hover:bg-gray-50 dark:hover:bg-gray-700">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{p.body}</p>
                  </li>
                ))}
                {filtered.length === 0 && <li className="text-gray-500">No results</li>}
              </ul>
            )}

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-500">Page {page}</div>
              <div className="flex gap-2">
                <Button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} variant="secondary">Prev</Button>
                <Button onClick={() => setPage((p) => p + 1)} variant="primary">Next</Button>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <TaskManager />
        </div>
      </div>
    </div>
  )
}

export default Home
