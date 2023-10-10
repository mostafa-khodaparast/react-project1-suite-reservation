import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "../services/apiAuth"
import Darkmode from "./Darkmode"


const Header = () => {

    const { data: user } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentUser
    })

    const { fullname } = user.user_metadata

    return (
        <header className="flex justify-between items-center font-beyekan font-bold text-blue-950 dark:text-stone-300 dark:bg-[#111827] bg-[#fff] px-5 py-10 col-span-3">
            <Darkmode />
            <span className="pr-2 text-2xl">{fullname}</span>
        </header>
    )
}

export default Header