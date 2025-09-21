const BASE = import.meta.env.VITE_API_URL

export async function post(path, body, useToken = true) {
  const token = useToken ? localStorage.getItem('token') : null
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(body)
  })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}