interface Props {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  pageSize: number
}

export default function Pagination({ page, setPage, pageSize }: Props) {
  const renderPagination = () => {
    return null
  }
  return (
    <div className='mt-6 flex flex-wrap justify-center'>
      <button className='mx-2 flex cursor-pointer items-center rounded bg-white px-3 py-2 shadow-sm'>Prev</button>
      {renderPagination()}
      <button className='mx-2 flex cursor-pointer items-center rounded bg-white px-3 py-2 shadow-sm'>Next</button>
    </div>
  )
}
