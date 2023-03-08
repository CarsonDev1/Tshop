import { Link } from 'react-router-dom'
export default function RegisterHeader() {
  return (
    <header className='py-5'>
      <div className='mx-auto max-w-7xl px-4'>
        <nav className='flex items-end'>
          <Link to='/'>
            <img src='../assets/logo.png' alt='' />
          </Link>
        </nav>
      </div>
    </header>
  )
}
