export const saveAccessTokenToLs = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

export const clearAccessTokenFromLs = () => {
  localStorage.removeItem('access_token')
}

export const getAccessTokenFromLs = () => localStorage.getItem('access_token') || ''
export const getProfile = () => localStorage.getItem('profile')
