type Role = 'user' | 'admin'

export interface User {
  _id: string
  Role: string[]
  email: string
  name: string
  date_of_birth: null
  address: string
  phone: string
  createdAt: string
  updatedAt: string
}
