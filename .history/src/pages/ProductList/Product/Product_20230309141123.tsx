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
          <div className='mt-3 flex items-center'>
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
          <div className='mt-3 flex items-center justify-end'>
            <div className='flex items-center'>
              <div className='relative'>
                <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: '50%' }}>
                  <svg
                    enableBackground='new 0 0 15 15'
                    viewBox='0 0 15 15'
                    x={0}
                    y={0}
                    className='shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid'
                  >
                    <polygon
                      points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeMiterlimit={10}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
