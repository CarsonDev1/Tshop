import { Link } from 'react-router-dom'
export default function RegisterHeader() {
  return (
    <header className='py-5'>
      <div className='mx-auto max-w-7xl px-4'>
        <nav className='flex items-end'>
          <Link to='/'>
            <div>
              <img src='https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/image/d1(21).jpg' alt='' />
            </div>
          </Link>
        </nav>
      </div>
    </header>
  )
}
