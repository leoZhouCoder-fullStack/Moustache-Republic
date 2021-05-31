import React from 'react'
import SizeButton from '@src/components/inputs/buttons/SizeButton'
import { ProductSize } from './types'

interface SizeSelectorProps {
  sizes: ProductSize[]
  currentSize?: ProductSize
  onSelectSize: (size: ProductSize) => void
}

const SizeSelector = (props: SizeSelectorProps) => {
  const { sizes, currentSize, onSelectSize } = props
  const [selectedSize, setSelectedSize] = React.useState<ProductSize>(currentSize)
  React.useEffect(() => {
    if (currentSize != selectedSize) setSelectedSize(currentSize)
  }, [currentSize])

  const handleClickSizeButton = (size: ProductSize) => {
    const newSize = size === selectedSize ? null : size
    setSelectedSize(newSize)
    onSelectSize(newSize)
  }
  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="w-full flex text-lg font-bold">
        <div className="text-grey">SIZE</div>
        <div className="text-required">*</div>
        {selectedSize && <div className="pl-1">{selectedSize}</div>}
      </div>
      <div className="w-full flex space-x-2">
        {sizes.map(size => (
          <SizeButton
            key={size}
            label={size}
            onClick={() => handleClickSizeButton(size)}
            selected={size == selectedSize}
          />
        ))}
      </div>
    </div>
  )
}

export default SizeSelector
