import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/helpers";



const Pagination = ({ dataLength }) => {

  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1
  const pageNumbers = Math.ceil(dataLength / PAGE_SIZE)


  function nextPage() {
    const next = currentPage === pageNumbers ? currentPage : currentPage + 1
    searchParams.set('page', next)
    setSearchParams(searchParams)
  }


  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1
    searchParams.set('page', prev)
    setSearchParams(searchParams)
  }


  //no need to pagination if there is one page
  if(pageNumbers <= 1) return null

  return (
    <div className="w-[90%] flex items-center justify-evenly dark:text-stone-300 mt-4 mx-auto">
      <div className="flex items-center">
        <button
          onClick={nextPage}
          disabled={currentPage === pageNumbers}
          className="bg-blue-500 px-3 py-2 mx-2 font-beyekan font-semibold rounded-sm disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-blue-700 transition-all duration-300 text-stone-100 flex items-center">
          <HiChevronLeft />
          <span>بعدی</span>
        </button>
        <div className="mx-10 font-beyekan">
          <p className="font-semibold">نمایش
            <span className="px-1">{(currentPage - 1) * PAGE_SIZE + 1}</span> تا
            <span className="px-1">{currentPage === pageNumbers ? dataLength : currentPage * PAGE_SIZE}</span>از
            <span className="px-2">{dataLength}</span>موردیافت شده
          </p>
        </div>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-blue-500 px-3 py-2 mx-2 font-beyekan font-semibold disabled:bg-gray-500 disabled:cursor-not-allowed rounded-sm hover:bg-blue-700 transition-all duration-300 text-stone-100 flex items-center">
          <span>قبلی</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Pagination
