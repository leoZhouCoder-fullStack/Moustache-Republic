export enum ProductSize {
  s = 'S',
  m = 'M',
  l = 'L',
}

export type Product = {
  name: string
  price: number
  detail: string
  image: string
  sizes: ProductSize[]
}

export type Order = {
  product: Product
  size: string
  number: string
}


