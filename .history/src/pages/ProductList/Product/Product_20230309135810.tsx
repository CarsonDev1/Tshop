import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className='rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.0625rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%]'>
          <img src='https://cf.shopee.vn/file/sg-11134201-22100-g087citq2bjv59' alt='' />
        </div>
      </div>
    </Link>
  )
}
