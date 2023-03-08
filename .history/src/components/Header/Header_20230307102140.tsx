import { Link } from 'react-router-dom'
import logo from '../../assets/logoHeader.png'

export default function Header() {
  return (
    <div className='bg-primary pb-5 pt-2 text-white'>
      <div className='container'>
        <div className='flex justify-end'>
          <div className='flex cursor-pointer items-center py-1 hover:text-gray-300'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
              />
            </svg>
            <span className='mx-1'>Tiếng Việt</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
            </svg>
          </div>
          <div className='ml-6 flex cursor-pointer items-center py-1 hover:text-gray-300'>
            <div className='mr-2 h-6 w-6 flex-shrink-0'>
              <img
                src='https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/133201823_465843014409987_8378772611988159967_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uPysPFAC6lgAX_6ooBl&_nc_ht=scontent-hkg4-1.xx&oh=00_AfDOJ6dwB-bcydBizoNRIhZb5s__QCYUqSutAi4I7f3WDg&oe=642E094B'
                alt='avatar'
                className='h-full w-full rounded-full object-cover'
              />
            </div>
            <div>buitritinh</div>
          </div>
        </div>
        <div className='grid grid-cols-12 items-end gap-4'>
          <Link to='/' className='col-span-2'>
            <img className='h-16 lg:h-24' src={logo} alt='logo' />
          </Link>
        </div>
      </div>
    </div>
  )
}
