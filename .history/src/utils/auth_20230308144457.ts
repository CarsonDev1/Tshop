export const saveAccessTokenToLs = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken)
}
