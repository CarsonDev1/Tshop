import { Product } from './product.type'

export interface Purchase {
  _id: string
  buy_count: string
  price: number
  price_before_discount: number
  status: number
  user: string
  product: Product
}
