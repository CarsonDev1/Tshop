import { ProductListConfig } from 'src/types/product.type'
import http from 'src/utils/http'

const URL = 'products'
const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get(URL, {
      params
    })
  },
  getProductDetail(id: string) {
    return http.get(`${URL}/${id}`)
  }
}
