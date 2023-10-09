import { useQuery } from "@tanstack/react-query"
import Logout from "../features/authentication/Logout"
import { getCurrentUser } from "../services/apiAuth"
import { useNavigate } from "react-router-dom"
import Darkmode from "./Darkmode"


const Header = () => {

    const navigate = useNavigate()

    const { data: user } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentUser
    })

    const { fullname, avatar } = user.user_metadata

    return (
        <header className="flex justify-between items-center font-beyekan font-bold text-blue-950 dark:text-stone-300 dark:bg-[#111827] bg-[#fff] px-5 py-10 col-span-3">
            <div className="flex space-x-2 items-center">
                <Logout />
                <Darkmode />
            </div>
            <div dir="rtl" className="flex items-center">
                <img onClick={() => navigate('/account')} className="cursor-pointer w-14" src={avatar || 'default-user.jpg'} />
                <span className="pr-2 text-lg">{fullname}</span>
            </div>
        </header>
    )
}

export default Header