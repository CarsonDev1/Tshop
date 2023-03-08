import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
export default function RegisterHeader() {
  return (
    <header className='py-5'>
      <div className='mx-auto max-w-7xl px-4'>
        <nav className='flex items-end'>
          <Link to='/'>
            <div>
              <img src={logo} alt='' />
            </div>
          </Link>
        </nav>
      </div>
    </header>
  )
}
