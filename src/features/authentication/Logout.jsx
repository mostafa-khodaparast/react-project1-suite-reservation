import { useMutation, useQueryClient } from "@tanstack/react-query"
import { HiArrowLeftOnRectangle } from "react-icons/hi2"
import { logoutUser } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"


const Logout = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const { mutate } = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            navigate('/login')
            queryClient.removeQueries()   //this remove all cache from react-query
        }
    })


    return (
        <li onClick={() => mutate()} className="flex space-x-2 cursor-pointer hover:bg-[#111827] hover:text-stone-300 hover:dark:bg-[#f9fafb] text-[#6b7280] hover:dark:text-blue-950 rounded-md hover:px-10 py-3 items-center transition-all duration-300">
            <HiArrowLeftOnRectangle />
            <span className="pr-2">خروج</span>
        </li>

    )
}

export default Logout
