export const key = 'xytoken'

export function getToken() {
  return localStorage.getItem(key) || undefined
}

export function setToken(token: string) {
    // TODO: save token to local storage or cookie
    localStorage.setItem(key, token)
}

export function removeToken() {
  localStorage.removeItem(key)  
}