import { useQuery } from "@tanstack/react-query";
import Stat from "../features/dashboard/Stat";
import { getBookings } from "../services/apiBookings";
import { getCabins } from "../services/apiCabins";
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays } from "react-icons/hi2";
import Spinner from "../ui/Spinner";



function Dashboard() {

  const { data: cabins, isLoading: loadingCabins } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins
  })


  const { data: bookings, isLoading: loadingBookings } = useQuery({
    queryKey: ['booking'],
    queryFn: () => getBookings()
  })


  const numOfBookings = bookings?.data?.length
  const totalSales = bookings?.data?.reduce((acc, curr) => acc + curr.totalPrice, 0)
  const totalNights = bookings?.data?.reduce((acc, curr) => acc + curr.numNights, 0)
  console.log(totalSales);

  if (loadingBookings || loadingCabins) return <Spinner />

  return (
    <>
      <div dir="rtl" className=" font-beyekan font-bold text-2xl mr-10 text-blue-950 dark:text-stone-300 ">داشبورد</div>
      <div className="grid grid-cols-3 gap-4 mt-3 ">
        <Stat title='میزان فروش' value={totalSales} icon={<HiOutlineBanknotes />} color='green' />
        <Stat title='تعدادشب اقامت' value={totalNights} icon={<HiOutlineCalendarDays />} color='orange' />
        <Stat title='تعداد رزروها' value={numOfBookings} icon={<HiOutlineBriefcase />} color='blue' />
      </div>

    </>
  );
}

export default Dashboard;
