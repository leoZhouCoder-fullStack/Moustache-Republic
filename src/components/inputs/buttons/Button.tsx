import React from 'react'

interface BasicButtonProps {
  label?: string
  onClick: () => void
}

const BasicButton = (props: BasicButtonProps) => {
  const { label, onClick } = props
  return (
    <div
      className="border-2 border-black w-auto inline-block p-2 pl-8 pr-8 font-bold select-none text-xl hover:bg-black hover:text-white cursor-pointer transition-all duration-200"
      onClick={onClick}
    >
      {label}
    </div>
  )
}

export default BasicButton
