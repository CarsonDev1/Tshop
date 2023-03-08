import { User } from 'src/types/user.type'

export const saveAccessTokenToLs = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

export const clearAccessTokenFromLs = () => {
  localStorage.removeItem('access_token')
}

export const getAccessTokenFromLs = () => localStorage.getItem('access_token') || ''
export const getProfile = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

export const setProfile = (profile: User) => {
  localStorage.setItem('access_token', JSON.stringify(profile)
}
