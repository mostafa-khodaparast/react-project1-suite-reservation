import BookingTable from "../features/bookings/BookingTable";
import FilterBookingByStatus from "../features/bookings/FilterBookingByStatus";

const Bookings = () => {
  return (
    <div>
      <FilterBookingByStatus />
      <BookingTable />
    </div>
  );
}

export default Bookings;
