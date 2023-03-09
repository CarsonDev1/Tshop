export default function SortProductList() {
  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>Sắp xếp theo</div>
          <button className=' h-8 bg-primary px-4 text-center text-sm capitalize text-white hover:bg-primary/80'>
            Phổ biến
          </button>
          <button className=' h-8 bg-white px-4 text-center text-sm capitalize text-black hover:bg-slate-100'>
            Mới nhất
          </button>
          <button className='h-8 bg-white px-4 text-center text-sm capitalize text-black hover:bg-slate-100'>
            Bán chạy
          </button>
          <select className='h-8 bg-white px-4 capitalize'></select>
        </div>
      </div>
    </div>
  )
}
