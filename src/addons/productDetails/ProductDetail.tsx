import React from 'react'
import { atom, useSetRecoilState } from 'recoil'

import { getPriceStr } from '@src/utils'
import Button from '@src/components/inputs/buttons/Button'
import ProductImage from '@src/components/dataDisplay/ProductImage'

import { Product, ProductSize } from './types'
import SizeSelector from './SizeSelector'
import { cartState } from '../cart/Cart'

interface productDetailProps {
  product?: Product
  size?: ProductSize
}

export const productDetailState = atom<productDetailProps>({
  key: 'productDetail',
  default: {
    product: null,
    size: null,
  },
})

interface ProductDetailProps {
  product: Product
}

const ProductDetail = (props: ProductDetailProps) => {
  const { product } = props

  const [currentSize, setCurrentSize] = React.useState<ProductSize>(null)
  const setCartState = useSetRecoilState(cartState)

  const setProductDetailState = useSetRecoilState(productDetailState)
  React.useEffect(() => {
    setProductDetailState({ product, size: null })
  }, [product])

  const handlerAddToCart = () => {
    console.log('[handlerAddToCart]')
    setCartState(preCartState => {
      const preOrders = preCartState.orders
      let newOrders = []
      let find = false
      preOrders.forEach(order => {
        if (order.product.name == product.name && order.size == currentSize) {
          find = true
          newOrders.push({ ...order, number: order.number + 1 })
        } else {
          newOrders.push(order)
        }
      })
      if (!find) {
        newOrders.push({ product: product, size: currentSize, number: 1 })
      }
      console.log('[handlerAddToCart]: ', newOrders)
      return { orders: newOrders, open: preCartState.open }
    })
  }

  return (
    <div className="w-full flex flex-col space-y-8 md:flex-row md:space-y-0">
      <div className="w-full md:w-1/2 h-full flex items-start justify-center">
        <ProductImage url="/classic-tee.jpeg" />
      </div>
      <div className="w-full md:w-1/2 h-full space-y-6">
        <div className="text-3xl">{product.name}</div>
        <div className="text-xl font-bold">{getPriceStr(product.price)}</div>
        <div className="text-xl text-grey">{product.detail}</div>
        <div className="text-3xl">
          <SizeSelector
            sizes={product.sizes}
            currentSize={currentSize}
            onSelectSize={setCurrentSize}
          />
        </div>
        <Button label="ADD TO CART" onClick={handlerAddToCart} disabled={!currentSize} />
      </div>
    </div>
  )
}

export default ProductDetail
