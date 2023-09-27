import { NavLink } from "react-router-dom";
import {
  HiOutlineHome, HiOutlineCalendarDays,
  HiOutlineHomeModern, HiOutlineUsers, HiOutlineCog6Tooth
} from "react-icons/hi2";


const MainNav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-3 items-start text-xl font-medium w-1/2 ml-8 ">
        <li>
          <NavLink to='/dashboard' className="flex space-x-2 hover:text-[#111827] hover:bg-[#f9fafb] text-[#6b7280] rounded-md hover:px-10 py-3 items-center transition-all duration-300">
            <HiOutlineHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/bookings' className="flex space-x-2 hover:text-[#111827] hover:bg-[#f9fafb] text-[#6b7280] rounded-md hover:px-10 py-3 items-center transition-all duration-300">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/cabins' className="flex space-x-2 hover:text-[#111827] hover:bg-[#f9fafb] text-[#6b7280] rounded-md hover:px-10 py-3 items-center transition-all duration-300">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' className="flex space-x-2 hover:text-[#111827] hover:bg-[#f9fafb] text-[#6b7280] rounded-md hover:px-10 py-3 items-center transition-all duration-300">
            <HiOutlineUsers />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/settings' className="flex space-x-2 hover:text-[#111827] hover:bg-[#f9fafb] text-[#6b7280] rounded-md hover:px-10 py-3 items-center transition-all duration-300">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
