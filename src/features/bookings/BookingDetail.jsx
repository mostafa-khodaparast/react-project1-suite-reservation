import {
  HiOutlineChatBubbleBottomCenterText, HiOutlineCheckCircle,
  HiOutlineCurrencyDollar, HiOutlineHomeModern
} from "react-icons/hi2"
import { useNavigate, useParams, } from "react-router-dom"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import Spinner from "../../ui/Spinner"
import { getBooking, updateBooking, deleteBooking } from "../../services/apiBookings"



const BookingDetail = () => {

  const { bookingId } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { isLoading, data = {} } = useQuery({       //{} is default value for initial fetching data
    queryKey: ['booking'],
    queryFn: () => getBooking(bookingId)
  })

  const { mutate: checkIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "ورود",
        isPaid: true,
      }),
    onSuccess: (data) => {               //we access to data that return by mutationFn
      toast.success(`رزرو باموفقیت ثبت شد`);
      queryClient.invalidateQueries({
        queryKey: ['booking']
      });
    },
    onError: () => toast.error("ثبت باخطا مواجه شد"),
  });

  const { mutate: checkOut } = useMutation({
    mutationFn: (bookingId) => updateBooking(bookingId, { status: "خروج" }),
    onSuccess: (data) => {
      toast.success(`خروج باموفقیت ثبت شد`);
      queryClient.invalidateQueries({
        queryKey: ['booking']
      });
      navigate('/bookings')
    },
    onError: () => toast.error("خروج باخطا مواجه شد"),
  });

  const { mutate: handleDelete } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success('رزرو باموفقیت حذف شد')
      queryClient.invalidateQueries({                //update UI
        queryKey: ['booking']
      })
      navigate('/bookings')
    },
    onError: (err) => toast.error(err.message)
  })

  const {
    numNights,
    numGuests,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    status,
    guests: { fullName: guestName, email, nationalID } = {}, // {} default value
    cabins: { name: cabinName } = {}, // default value
  } = data


  if (isLoading) return <Spinner />

  return (
    <div dir="rtl" className="w-[95%] mx-auto">

      <div className="flex items-center justify-between font-semibold">
        <div className="flex items-center space-x-5">
          <span className=" font-bold ml-2 dark:text-stone-300">رزرو شماره : {bookingId}</span>
          <span
            className={`${isPaid ?
              status === 'ورود' ? 'text-green-600 bg-green-300' : 'text-orange-600 bg-orange-300'
              : 'text-blue-600 bg-blue-300'} font-bold italic p-2 rounded-3xl`}
          > وضعیت:
            {status}
          </span>
        </div>
        <button onClick={() => navigate(-1)} className="text-blue-600 hover:text-blue-800 font-beyekan"> برگرد &larr;</button>
      </div>

      <header className="flex items-center justify-between bg-blue-500 rounded-sm text-stone-200 font-semibold px-8 py-4 my-4">
        <div className="flex space-x-2 items-center text-lg text-blue-900">
          <HiOutlineHomeModern />
          <p className=" font-beyekan pr-2">{numNights} شب اقامت در سوئیت شماره : {cabinName}</p>
        </div>
      </header>

      <div className="flex space-x-3 text-stone-400">
        <p className="text-stone-400 font-semibold pl-3 font-bezar ">
          {guestName} {numGuests > 1 ? `همراه با ${numGuests - 1} مهمان` : ""}
        </p>
        <span>&bull;</span>
        <p className=" font-bezar">ایمیل: {email}</p>
        <span>&bull;</span>
        <p className=" font-bezar">کدملی: {nationalID}</p>
      </div>

      {observations &&
        (<div className="flex space-x-2 my-5 items-center text-stone-400">
          <HiOutlineChatBubbleBottomCenterText />
          <span className="text-stone-400 font-beyekan font-semibold px-2">مشاهدات: </span>
          <p className="text-stone-400 font-bezar text-lg">{observations}</p>
        </div>)
      }

      <p className="text-stone-400 font-semibold flex items-center">
        <HiOutlineCheckCircle />
        <span className="px-2 font-beyekan ">شامل صبحانه :</span>
        <span className="text-stone-400 font-bezar pl-2">{hasBreakfast ? "بله" : "خیر"}</span>
      </p>

      <div className={`flex items-center justify-between font-semibold my-2 ${isPaid ? 'bg-green-400 text-green-800' : 'bg-blue-500'}  rounded-sm px-8 py-4 space-x-5 font-semibold`}>
        <div className="flex items-center">
          <HiOutlineCurrencyDollar />
          <span className="px-2 font-beyekan">مبلغ نهایی: </span>
          {totalPrice }  تومان
        </div>
        <p className=" font-beyekan">{isPaid ? "پرداخت شده" : "پرداخت نشده"}</p>
      </div>

      <div className=" w-1/2 mx-auto">
        {status === 'نامشخص' &&
          <button
            onClick={() => checkIn(bookingId)}
            disabled={isPaid}
            className="w-full hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed bg-blue-500 font-semibold hover:text-stone-300 text-stone-100 py-4 px-4 mt-4 rounded-sm transition-all duration-300"
          >
            پرداخت
          </button>
        }

        {status === 'ورود' &&
          <button
            onClick={() => checkOut(bookingId)}
            disabled={status === 'checked-out'}
            className="w-full hover:bg-orange-400 cursor-pointer bg-orange-500 font-semibold hover:text-orange-700 text-orange-100 py-4 px-4 mt-2 rounded-sm transition-all duration-300"
          >
            check-out
          </button>
        }
        {status !== 'ورود' &&
          <button
            onClick={() => handleDelete(bookingId)}
            className="w-full hover:bg-red-400 cursor-pointer bg-red-500 font-semibold hover:text-red-700 text-red-100 py-4 px-4 mt-2 rounded-sm transition-all duration-300"
          >
            حذف رزرو
          </button>
        }
      </div>
    </div>
  )
}

export default BookingDetail
