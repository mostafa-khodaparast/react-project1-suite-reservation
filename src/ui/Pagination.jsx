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
  //if(pageNumbers <= 1) return null

  return (
    <div className="w-[90%] flex items-center justify-between mt-4 mx-auto">
      <div>
        <p className="font-semibold">showing
          <span className="px-1">{(currentPage - 1) * PAGE_SIZE + 1}</span> to
          <span className="px-1">{currentPage === pageNumbers ? dataLength : currentPage * PAGE_SIZE}</span>of
          <span className="px-1">{dataLength}</span>results
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-blue-500 px-3 py-2 mx-2 rounded-sm text-stone-100 flex items-center">
          <HiChevronLeft />
          <span>Previous</span>
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pageNumbers}
          className="bg-blue-500 px-3 py-2 mx-2 rounded-sm text-stone-100 flex items-center">
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Pagination




// const Buttons = styled.div`
//   display: flex;
//   gap: 0.6rem;
// `;

// const PaginationButton = styled.button`
//   background-color: ${(props) =>
//     props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
//   color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
//   border: none;
//   border-radius: var(--border-radius-sm);
//   font-weight: 500;
//   font-size: 1.4rem;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.4rem;
//   padding: 0.6rem 1.2rem;
//   transition: all 0.3s;

//   &:has(span:last-child) {
//     padding-left: 0.4rem;
//   }

//   &:has(span:first-child) {
//     padding-right: 0.4rem;
//   }

//   & svg {
//     height: 1.8rem;
//     width: 1.8rem;
//   }

//   &:hover:not(:disabled) {
//     background-color: var(--color-brand-600);
//     color: var(--color-brand-50);
//   }
// `;
