import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
export default function RegisterHeader() {
  return (
    <header className='py-2'>
      <div className='mx-auto max-w-7xl px-4'>
        <nav className='flex items-end'>
          <Link to='/'>
            <img className='h-28 lg:h-36' src={logo} alt='logo' />
          </Link>
          <div className='ml-5 text-xl lg:text-2xl'>Đăng Nhập</div>
        </nav>
      </div>
    </header>
  )
}
