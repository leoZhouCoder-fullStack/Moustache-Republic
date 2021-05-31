import React from 'react'

import ProductDetail from './ProductDetail'
import TopBar from './TopBar'
import { Product } from './types'

interface ProductDetailAppProps {
  product: Product
}

const ProductDetailApp = (props: ProductDetailAppProps) => {
  const { product } = props
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="w-full mt-6">
        <TopBar />
      </div>
      <div className="w-full mt-6 p-6">
        <ProductDetail product={product} />
      </div>
    </div>
  )
}

export default ProductDetailApp
