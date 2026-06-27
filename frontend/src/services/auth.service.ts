import { users } from '@/data/users'

const LOGIN_TIMEOUT = 1200

export async function login(email: string, password: string) {
  await new Promise((resolve) => setTimeout(resolve, LOGIN_TIMEOUT))

  const user = users.find(
    (user) => user.email === email && user.password === password,
  )

  if (!user) return null

  return {
    user,
    token: 'fake-jwt-token-' + user.id,
  }
}