const TOKEN_KEY = 'auth_token'

export function setSession(token: string) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function getSession() {
  return localStorage.getItem(TOKEN_KEY)
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY)
}

export function isAuthenticated() {
  return !!getSession()
}