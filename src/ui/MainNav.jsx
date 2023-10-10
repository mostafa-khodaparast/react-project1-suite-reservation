import { NavLink } from "react-router-dom";
import {
  HiOutlineHome, HiOutlineCalendarDays,
  HiOutlineHomeModern, HiOutlineUsers, HiOutlineCog6Tooth, HiArrowLeftOnRectangle
} from "react-icons/hi2";
import Logout from "../features/authentication/Logout";


const MainNav = () => {
  return (
    <nav>
      <ul dir="rtl" className="flex flex-col gap-3 font-beyekan text-xl font-medium mr-10">
        <li>
          <NavLink to='/dashboard' className="flex space-x-2 hover:bg-[#111827] hover:text-stone-300 hover:dark:bg-[#f9fafb] text-[#6b7280] hover:dark:text-blue-950 rounded-md hover:px-10 py-3 items-center transition-all duration-300">
            <HiOutlineHome />
            <span className="pr-2">خانه</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/bookings' className="flex space-x-2 hover:bg-[#111827] hover:text-stone-300 hover:dark:bg-[#f9fafb] text-[#6b7280] hover:dark:text-blue-950 rounded-md hover:px-10 py-3 items-center transition-all duration-300">
            <HiOutlineCalendarDays />
            <span className="pr-2">رزرو</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/cabins' className="flex space-x-2 hover:bg-[#111827] hover:text-stone-300 hover:dark:bg-[#f9fafb] text-[#6b7280] hover:dark:text-blue-950 rounded-md hover:px-10 py-3 items-center transition-all duration-300">
            <HiOutlineHomeModern />
            <span className="pr-2">سوئیت ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' className="flex space-x-2 hover:bg-[#111827] hover:text-stone-300 hover:dark:bg-[#f9fafb] text-[#6b7280] hover:dark:text-blue-950 rounded-md hover:px-10 py-3 items-center transition-all duration-300">
            <HiOutlineUsers />
            <span className="pr-2">کاربران</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/settings' className="flex space-x-2 hover:bg-[#111827] hover:text-stone-300 hover:dark:bg-[#f9fafb] text-[#6b7280] hover:dark:text-blue-950 rounded-md hover:px-10 py-3 items-center transition-all duration-300">
            <HiOutlineCog6Tooth />
            <span className="pr-2">تنظیمات</span>
          </NavLink>
        </li>
        <Logout />
      </ul>
    </nav>
  )
}

export default MainNav
