import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
export default function RegisterHeader() {
  return (
    <header className='py-5'>
      <div className='mx-auto max-w-7xl px-4'>
        <nav className='flex items-end'>
          <Link to='/'>
            <img className='h-11 lg:h-16' src={logo} alt='' />
          </Link>
        </nav>
      </div>
    </header>
  )
}
