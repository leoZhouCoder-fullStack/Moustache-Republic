import React from 'react'

import { Order } from './types'
import ProductImage from '@src/components/dataDisplay/ProductImage'
import { getPriceStr } from '@src/utils'

interface CartOrderDetailProps {
  order: Order
}

const CartOrderDetail = (props: CartOrderDetailProps) => {
  const { order } = props
  return (
    <div className="w-full h-auto inline-block flex space-x-4">
      <div className="w-1/3">
        <ProductImage url={order.product.image} />
      </div>
      <div className="w-2/3 flex flex-col space-y-4 text-lg">
        <div className="text-lg">{order.product.name}</div>
        <div className="w-full flex space-x-1">
          <div>{order.number}x</div>
          <div className="font-bold">{getPriceStr(order.product.price)}</div>
        </div>
        <div>Size: {order.size}</div>
      </div>
    </div>
  )
}

export default CartOrderDetail
