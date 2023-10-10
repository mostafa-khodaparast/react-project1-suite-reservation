import BookingTable from "../features/bookings/BookingTable";
import FilterBookingByStatus from "../features/bookings/FilterBookingByStatus";

const Bookings = () => {
  return (
    <div className="flex flex-col">
      <span className=" font-beyekan font-bold text-3xl self-end pr-10 pb-4 text-blue-950 dark:text-stone-300 ">رزروها</span>
      <FilterBookingByStatus />
      <BookingTable />
    </div>
  );
}

export default Bookings;
