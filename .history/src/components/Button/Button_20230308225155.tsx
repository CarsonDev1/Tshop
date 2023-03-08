import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

export default function Button(props: ButtonProps) {
  const { className, isLoading, disabled, children, ...rest } = props
  const newClassName = disabled ? className + 'cursor-not-allowed' : className
  return (
    <div className={newClassName} disabled={disabled} {...rest}>
      {children}
    </div>
  )
}
