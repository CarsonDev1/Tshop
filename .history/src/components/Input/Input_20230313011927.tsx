import { InputHTMLAttributes } from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  clasNameError?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({
  type,
  errorMessage,
  className,
  name,
  register,
  rules,
  autoComplete,
  classNameInput = 'w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm',
  clasNameError = 'mt-1 min-h-[1.25rem] text-sm text-red-600',
  ...rest
}: Props) {
  const registerResult = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input type={type} className={classNameInput} autoComplete={autoComplete} {...registerResult} />
      <div className={clasNameError}>{errorMessage}</div>
    </div>
  )
}
