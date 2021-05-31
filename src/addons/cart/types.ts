import { Product } from '@src/addons/productDetails/types'

export type Order = {
  product: Product
  size: string
  number: number
}
