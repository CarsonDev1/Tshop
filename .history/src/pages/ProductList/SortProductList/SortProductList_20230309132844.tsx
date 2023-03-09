export default function SortProductList() {
  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>Sắp xếp theo</div>
          <button className='hover: h-8 bg-primary bg-primary/80 px-4 text-center text-sm capitalize text-white'>
            Phổ biến
          </button>
          <button className='hover: h-8 bg-white bg-slate-100 px-4 text-center text-sm capitalize text-black'>
            Mới nhất
          </button>
          <button className='hover: h-8 bg-white bg-slate-100 px-4 text-center text-sm capitalize text-black'>
            Bán chạy
          </button>
        </div>
      </div>
    </div>
  )
}
