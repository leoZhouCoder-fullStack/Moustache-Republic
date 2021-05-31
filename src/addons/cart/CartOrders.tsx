import React from 'react'

import { Order } from './types'
import CartOrderDetail from './CartOrderDetail'

interface CartOrdersProps {
  orders: Order[]
}

const CartOrders = (props: CartOrdersProps) => {
  const { orders } = props
  if (!orders.length) return null
  return (
    <div className="w-full h-auto inline-block border-light-grey border flex flex-col pl-6 pr-6 pt-8 pb-8 space-y-10 bg-white">
      {orders.map((order, index) => (
        <CartOrderDetail key={index} order={order} />
      ))}
    </div>
  )
}

export default CartOrders
