import React from 'react'

interface SizeButtonProps {
  label?: string
  onClick: () => void
  selected?: boolean
}

const SizeButton = (props: SizeButtonProps) => {
  const { label, onClick, selected } = props
  const borderColor = selected ? 'border-black' : 'border-light-grey'
  return (
    <div
      className={`w-14 h-14 flex items-center justify-center border-2 select-none text-base text-grey cursor-pointer transition-all duration-200 ${borderColor}`}
      onClick={onClick}
    >
      {label}
    </div>
  )
}

export default SizeButton
