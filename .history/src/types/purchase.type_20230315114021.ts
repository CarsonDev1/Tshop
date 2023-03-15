import { Product } from './product.type'

export type PurchaseStatus = -1 | 1 | 2 | 3 | 4 | 5

export interface Purchase {
  _id: string
  buy_count: string
  price: number
  price_before_discount: number
  status: number
  user: string
  product: Product
}
