import React from 'react'
import { atom, useSetRecoilState, useRecoilValue } from 'recoil'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import { Order } from './types'
import CartOrders from './CartOrders'

export const cartState = atom<{ orders: Order[]; open: boolean }>({
  key: 'cart',
  default: {
    orders: [],
    open: false,
  },
})

const Cart = () => {
  const currentCartState = useRecoilValue(cartState)
  const setCartState = useSetRecoilState(cartState)
  let orderNum = 0

  currentCartState.orders?.forEach(order => {
    orderNum += order.number
  })
  return (
    <div className="relative h-full w-auto inline-block z-10 flex flex-col">
      <div
        className={`h-full w-auto inline-block flex items-center justify-center text-xl cursor-pointer z-20 p-2 border-opacity-0 border-light-grey border ${
          currentCartState.open ? 'bg-white border-opacity-100' : ''
        }`}
        onClick={() => {
          setCartState(preState => {
            return { ...preState, open: !preState.open }
          })
        }}
        onMouseOver={() => {
          setCartState(preState => {
            return { ...preState, open: true }
          })
        }}
        onMouseLeave={() => {
          setCartState(preState => {
            return { ...preState, open: false }
          })
        }}
        style={{ borderBottomColor: '#ffffff' }}
      >
        <div className="hidden md:block">My Cart</div>
        <ShoppingCartIcon className="md:hidden" />
        {orderNum > 0 && <div>{`( ${orderNum} )`}</div>}
      </div>

      {orderNum > 0 && currentCartState.open && (
        <div className="absolute ml-8 w-screen md:w-96 bottom-0 inset-y-full right-0 border-black h-auto inline-block transform -translate-y-px z-10">
          <CartOrders orders={currentCartState.orders} />
        </div>
      )}
    </div>
  )
}

export default Cart
