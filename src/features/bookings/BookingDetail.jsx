import { useNavigate, useParams, } from "react-router-dom"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import Spinner from "../../ui/Spinner"
import { getBooking, updateBooking } from "../../services/apiBookings"
import { HiOutlineChatBubbleBottomCenterText, HiOutlineCheckCircle, HiOutlineCurrencyDollar, HiOutlineHomeModern } from "react-icons/hi2"
import { format, isToday } from "date-fns"
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers"
import { toast } from "react-hot-toast"


const BookingDetail = () => {

  const { bookingId } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { isLoading, data = {} } = useQuery({           //{} is default value for initial fetching data
    queryKey: ['booking'],
    queryFn: () => getBooking(bookingId)
  })

  const { mutate } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
      }),
    onSuccess: () => {               //we access to data that return by mutationFn
      //toast.success(`Booking #${data.id} successfully checked in`);
      toast.success(`Booking # successfully checked in`);
      queryClient.invalidateQueries({
        queryKey: ['booking']
      });
    },
    onError: () => toast.error("There was an error while checking in"),
  });


  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    status,
    guests: { fullName: guestName, email, country, nationalID } = {}, // {} default value
    cabins: { name: cabinName } = {}, // default value
  } = data


  if (isLoading) return <Spinner />

  return (
    <div className="w-[95%] mx-auto">
      <div className="flex items-center justify-between font-semibold">
        <div className="flex items-center space-x-5">
          <span className=" font-bold">Booking # {bookingId}</span>
          <span className={`${isPaid ? 'text-green-500' : 'text-blue-400'} font-bold italic`}>{status}</span>
        </div>
        <button onClick={() => navigate(-1)} className="text-blue-600 hover:text-blue-800">&larr; Back</button>
      </div>
      <header className="flex items-center justify-between bg-blue-500 rounded-sm text-stone-200 font-semibold px-8 py-4 my-4">
        <div className="flex space-x-2 items-center text-lg">
          <HiOutlineHomeModern />
          <p>{numNights} nights in Cabin <span>{cabinName}</span></p>
        </div>
        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </header>
      <div className="flex space-x-3 text-stone-400">
        <p className="text-stone-800 font-semibold">
          {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
        </p>
        <span>&bull;</span>
        <p>{email}</p>
        <span>&bull;</span>
        <p>National ID: {nationalID}</p>
      </div>
      {observations && (
        <div className="flex space-x-2 my-5 items-center">
          <HiOutlineChatBubbleBottomCenterText />
          <span className="text-stone-800 font-semibold pl-2">Observations: </span>
          <p className="text-stone-400">{observations}</p>
        </div>
      )}
      <p className="text-stone-800 font-semibold flex items-center"><HiOutlineCheckCircle />
        <span className="pl-2">Breakfast Included?</span>
        <span className="text-stone-400 pl-2">{hasBreakfast ? "Yes" : "No"}</span>
      </p>
      <div className={`flex items-center justify-between font-semibold my-2 ${isPaid ? 'bg-green-400 text-green-800' : 'bg-blue-500'}  text-stone-200 rounded-sm px-8 py-4 space-x-5 font-semibold`}>
        <div className="flex items-center">
          <HiOutlineCurrencyDollar /> <span className="px-2">Total price: </span>
          {formatCurrency(totalPrice)}
          {/* {hasBreakfast && ` (${formatCurrency(cabinPrice)} cabin + ${extrasPrice} breakfast)`} */}
        </div>
        <p>{isPaid ? "Paid" : "Not paid"}</p>
      </div>
      <p className="text-stone-400 text-sm italic text-right">Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      <div className=" w-1/2 mx-auto">
        <button 
        onClick={() => mutate(bookingId)} 
        disabled={isPaid}
        className="w-full hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed bg-blue-500 font-semibold hover:text-stone-300 text-stone-100 py-4 px-4 rounded-sm transition-all duration-300">Check-in</button>
      </div>
    </div>
  )
}

export default BookingDetail
