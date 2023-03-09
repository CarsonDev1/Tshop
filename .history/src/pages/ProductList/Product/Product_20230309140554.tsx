import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className='rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.0625rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%]'>
          <img
            src='https://cf.shopee.vn/file/sg-11134201-22100-g087citq2bjv59'
            alt=''
            className='absolute top-0 left-0 h-full w-full bg-white object-cover'
          />
        </div>
        <div className='overflow-hidden p-2'>
          <div className='min-h-[1.75rem] text-sm line-clamp-2'>
            Áo Thun LEVENTS POPULAR LOGO TEE Nam Nữ Unisex Form Rộng Tay Lỡ, AT125 trending xu hướng, Men Lì Fashion
          </div>
          <div className='flex-items-center mt-3'>
            <div className='max-w-[50%] truncate text-gray-500 line-through'>
              {' '}
              <span className='text-xs'>₫</span>
              <span>70.000</span>
            </div>
            <div className='ml-1 truncate text-primary'>
              <span className='text-xs'>₫</span>
              <span>39.900</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
