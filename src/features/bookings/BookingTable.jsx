import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import SingleBook from "./SingleBook";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../ui/Pagination";
import { data } from "autoprefixer";


const BookingTable = () => {

  const [searchParams] = useSearchParams()
  const queryClient = useQueryClient()

  //use this currentPage for server side pagination
  const currentPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1

  const {
    isLoading,
    data: { data: bookings, count: dataLength } = {}  // {} is a default value in first fetching
  } = useQuery({
    queryKey: ['booking', currentPage],
    queryFn: () => getBookings(currentPage)
  })

  //pre-fetching by react-query for pagination
  queryClient.prefetchQuery({
    queryKey: ['booking', currentPage + 1],
    queryFn: () => getBookings(currentPage + 1)
  })


  //filter bookings base on status
  const bookingStatus = searchParams.get('bookingsStatus') || 'all'
  let filteredBookings
  switch (bookingStatus) {
    case 'unconfirmed':
      filteredBookings = bookings.filter(book => book.status === 'unconfirmed')
      break;
    case 'check-in':
      filteredBookings = bookings.filter(book => book.status === 'check-in')
      break;
    case 'check-out':
      filteredBookings = bookings.filter(book => book.status === 'check-out')
      break;
    default:
      filteredBookings = bookings
  }

  if (bookings?.length === 0) return <p className="fonst-semibold text-center text-red-500 mt-20">No booking found...</p>

  if (isLoading) return <Spinner />


  return (
    <>
      <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] w-[90%] text-center font-semibold mt-3 mx-auto bg-slate-300 py-2">
        <div>Cabin</div>
        <div>Guest</div>
        <div>Nights</div>
        <div>Status</div>
        <div>Amount</div>
      </div>
      {filteredBookings?.map(book => <SingleBook book={book} key={book.id} />)}
      <Pagination dataLength={dataLength} />
    </>
  );
}

export default BookingTable;
