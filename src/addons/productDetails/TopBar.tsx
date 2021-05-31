import React from 'react'
import Cart from '@src/addons/cart/Cart'

const TopBar = () => {
  return (
    <div className="w-full h-12 flex-shrink-0 select-none flex items-center justify-end bg-header">
      <div className="h-full w-auto inline-block flex items-center justify-center pr-8">
        <Cart />
      </div>
    </div>
  )
}

export default TopBar
