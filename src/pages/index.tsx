import { Product, ProductSize } from '@src/addons/productDetails/types'
import React from 'react'
import { RecoilRoot } from 'recoil'
import ProductDetailApp from '../addons/productDetails/ProductDetailApp'

const HomePage: React.FC = () => {
  const currentProduct: Product = {
    name: 'Classic Tee',
    price: 75,
    detail:
      'This a simple product details section of a clothing retail site. Your task is to implement it with your weapon of choice, including but not limited to HTML, CSS and JavaScript. You will be assessed on the completions of the requirements and your general code quality and best coding practices',
    sizes: [ProductSize.s, ProductSize.m, ProductSize.l],
    image: '/classic-tee.jpeg',
  }
  return (
    <div className="h-screen w-screen bg-white">
      <RecoilRoot>
        <ProductDetailApp product={currentProduct} />
      </RecoilRoot>
    </div>
  )
}

export default HomePage
