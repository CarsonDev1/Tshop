import { Link } from 'react-router-dom'
import logo from '../../assets/logoHeader.png'
import Popover from '../Popover'

export default function Header() {
  return (
    <div className='bg-primary pt-2 text-white'>
      <div className='container items-center'>
        <Popover
          renderPopover={
            <div className='relative  max-w-[400px] rounded-sm border border-gray-200 bg-white text-sm shadow-md'>
              {purchasesInCart && purchasesInCart.length > 0 ? (
                <div className='p-2'>
                  <div className='capitalize text-gray-400'>Sản phẩm mới thêm</div>
                  <div className='mt-5'>
                    {purchasesInCart.slice(0, MAX_PURCHASES).map((purchase) => (
                      <div className='mt-2 flex py-2 hover:bg-gray-100' key={purchase._id}>
                        <div className='flex-shrink-0'>
                          <img
                            src={purchase.product.image}
                            alt={purchase.product.name}
                            className='h-11 w-11 object-cover'
                          />
                        </div>
                        <div className='ml-2 flex-grow overflow-hidden'>
                          <div className='truncate'>{purchase.product.name}</div>
                        </div>
                        <div className='ml-2 flex-shrink-0'>
                          <span className='text-orange'>₫{formatCurrency(purchase.product.price)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='mt-6 flex items-center justify-between'>
                    <div className='text-xs capitalize text-gray-500'>
                      {purchasesInCart.length > MAX_PURCHASES ? purchasesInCart.length - MAX_PURCHASES : ''} Thêm hàng
                      vào giỏ
                    </div>
                    <Link
                      to={path.cart}
                      className='bg-orange rounded-sm px-4 py-2 capitalize text-white hover:bg-opacity-90'
                    >
                      Xem giỏ hàng
                    </Link>
                  </div>
                </div>
              ) : (
                <div className='flex h-[300px] w-[300px] flex-col items-center justify-center p-2'>
                  <img src={noproduct} alt='no purchase' className='h-24 w-24' />
                  <div className='mt-3 capitalize'>Chưa có sản phẩm</div>
                </div>
              )}
            </div>
          }
        >
          <Link to='/' className='relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-8 w-8'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
              />
            </svg>
          </Link>
        </Popover>
        <div className='grid grid-cols-12 items-center gap-4'>
          <Link to='/' className='col-span-2'>
            <img className='h-16 lg:h-24' src={logo} alt='logo' />
          </Link>
          <form className='col-span-8'>
            <div className='mr-11 flex rounded-sm bg-white p-1'>
              <input
                type='text'
                name='search'
                className='flex-grow border-none bg-transparent px-3 py-2 text-black outline-none'
                placeholder='FREE SHIP ĐƠN TỪ 0Đ'
              />
              <button className='flex-shrink-0 rounded-sm bg-primary py-2 px-6 hover:opacity-90'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className='col-span-2'>
            <Link to='/' className=''>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-8 w-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
