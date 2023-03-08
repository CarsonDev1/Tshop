import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
export default function RegisterHeader() {
  return (
    <header className='py-2'>
      <div className='container'>
        <nav className='flex items-center'>
          <Link to='/'>
            <img className='h-16 lg:h-24' src={logo} alt='logo' />
          </Link>
          <div className='ml-5 text-xl lg:text-2xl'>Đăng Ký</div>
        </nav>
      </div>
    </header>
  )
}
