import React from 'react'

interface BasicButtonProps {
  label?: string
  onClick: () => void
  disabled?: boolean
}

const BasicButton = (props: BasicButtonProps) => {
  const { label, onClick, disabled } = props
  return (
    <div
      className={`border-2 border-black w-auto inline-block p-2 pl-8 pr-8 font-bold select-none text-xl transition-all duration-200 ${disabled? "text-grey border-light-grey":"hover:bg-black hover:text-white cursor-pointer"}`}
      onClick={() => {
        if (disabled) return
        onClick()
      }}
    >
      {label}
    </div>
  )
}

export default BasicButton
