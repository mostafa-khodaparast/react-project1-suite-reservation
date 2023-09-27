import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import SingleBook from "./SingleBook";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";


const BookingTable = () => {

  const { isLoading, data } = useQuery({
    queryKey: ['booking'],
    queryFn: getBookings
  })

  const [searchParams] = useSearchParams()

  const bookingStatus = searchParams.get('bookingsStatus') || 'all'

  let filteredBookings

  switch (bookingStatus) {
    case 'unconfirmed':
      filteredBookings = data.filter(book => book.status === 'unconfirmed')
      break;
    case 'check-in':
      filteredBookings = data.filter(book => book.status === 'check-in')
      break;
    case 'check-out':
      filteredBookings = data.filter(book => book.status === 'check-out')
      break;
    default:
      filteredBookings = data
  }

  if (data?.length === 0) return <p className="fonst-semibold text-center text-red-500 mt-20">No booking found...</p>

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
    </>
  );
}

export default BookingTable;
