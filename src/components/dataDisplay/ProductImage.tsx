import React from 'react'

interface ProductImageProps {
  url?: string
}

const ProductImage = (props: ProductImageProps) => {
  const { url } = props
  return <img src={url} />
}

export default ProductImage
