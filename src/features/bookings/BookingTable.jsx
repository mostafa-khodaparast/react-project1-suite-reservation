import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import SingleBook from "./SingleBook";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../ui/Pagination";


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
  const bookingStatus = searchParams.get('bookingsStatus') || 'همه'
  let filteredBookings
  switch (bookingStatus) {
    case 'نامشخص':
      filteredBookings = bookings.filter(book => book.status === 'نامشخص')
      break;
    case 'ورود':
      filteredBookings = bookings.filter(book => book.status === 'ورود')
      break;
    case 'خروج':
      filteredBookings = bookings.filter(book => book.status === 'خروج')
      break;
    default:
      filteredBookings = bookings
  }

  if (bookings?.length === 0) return <p className="fonst-semibold text-center text-red-500 mt-20">No booking found...</p>

  if (isLoading) return <Spinner />


  return (
    <>
      <div dir="rtl" className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] w-[90%] text-blue-950 text-center font-beyekan font-semibold mt-3 mx-auto bg-slate-300 py-2">
        <div>سوئیت</div>
        <div>مهمان</div>
        <div>تعداد شب</div>
        <div>وضعیت</div>
        <div>مبلغ</div>
      </div>
      {filteredBookings?.map(book => <SingleBook book={book} key={book.id} />)}
      <Pagination dataLength={dataLength} />
    </>
  );
}

export default BookingTable;
