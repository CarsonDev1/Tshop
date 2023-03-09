import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className='rounded-sm bg-white shadow hover:translate-y-[-0.0625rem] hover:shadow-md'></div>
    </Link>
  )
}
