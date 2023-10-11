import { useQuery } from "@tanstack/react-query";
import Stat from "../features/dashboard/Stat";
import { getBookings } from "../services/apiBookings";
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays } from "react-icons/hi2";
import Spinner from "../ui/Spinner";
import DurationChart from "../features/dashboard/DurationChart";



function Dashboard() {

  const { data: bookings, isLoading: loadingBookings } = useQuery({
    queryKey: ['booking'],
    queryFn: () => getBookings()
  })


  const numOfBookings = bookings?.data?.length
  const totalSales = bookings?.data?.reduce((acc, curr) => acc + curr.totalPrice, 0)
  const totalNights = bookings?.data?.reduce((acc, curr) => acc + curr.numNights, 0)

  if (loadingBookings) return <Spinner />

  return (
    <>
      <div dir="rtl" className=" font-beyekan font-bold text-2xl mr-10 text-blue-950 dark:text-stone-300 ">داشبورد</div>
      <div className="grid grid-cols-3 gap-4 mt-3 ">
        <Stat title='میزان فروش' value={totalSales + '000' + 'هزار تومان'} icon={<HiOutlineBanknotes />} color='green' />
        <Stat title='تعدادشب اقامت' value={totalNights} icon={<HiOutlineCalendarDays />} color='orange' />
        <Stat title='تعداد رزروها' value={numOfBookings} icon={<HiOutlineBriefcase />} color='blue' />
      </div>
      <DurationChart bookings={bookings} />
    </>
  );
}

export default Dashboard;
