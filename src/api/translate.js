// Minimal wrapper using LibreTranslate (public instance).
// Note: Public instances may be rate-limited. Consider hosting your own instance for production.
export const translateText = async (text, target = 'en', source = 'auto') => {
  const res = await fetch('https://libretranslate.de/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ q: text, source, target, format: 'text' })
  })

  if (!res.ok) {
    const txt = await res.text()
    throw new Error(`Translate API error: ${res.status} ${txt}`)
  }

  const data = await res.json()
  return data.translatedText
}

export const translatePosts = async (posts, target = 'en') => {
  // Translate title and body for each post in parallel (per post, translate title and body separately)
  const translated = await Promise.all(
    posts.map(async (p) => {
      try {
        const [title, body] = await Promise.all([
          translateText(p.title || '', target),
          translateText(p.body || '', target),
        ])
        return { ...p, title, body }
      } catch (e) {
        // On error, return original post and propagate error later
        return { ...p }
      }
    })
  )

  return translated
}
