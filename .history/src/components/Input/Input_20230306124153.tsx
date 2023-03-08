export default function Input() {
  return (
    <div className='mt-8'>
      <input
        type='email'
        className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
        placeholder='Email'
        {...register('email', rules.email)}
      />
      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.email?.message}</div>
    </div>
  )
}
