import { useMutation, useQueryClient } from "@tanstack/react-query"
import { HiArrowRightOnRectangle } from "react-icons/hi2"
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
        <HiArrowRightOnRectangle
            onClick={() => mutate()}
            className="w-8 h-8 cursor-pointer transition-all duration-200 text-red-500 hover:text-red-700"
        />
    )
}

export default Logout
