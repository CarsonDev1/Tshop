import axios from 'axios'

export function isAxiosError(error: unknown) {
  return axios.isAxiosError(error)
}
