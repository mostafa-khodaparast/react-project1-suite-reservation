import { useMutation } from "@tanstack/react-query"
import { apiSignUp } from "../../services/apiAuth"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export const useSignup = () => {

    const navigate = useNavigate()

    const { mutate: signUp, isLoading } = useMutation({
        mutationFn: apiSignUp,
        onSuccess: () => {
            navigate('/dashboard')
        },
        onError: (err) => {
            toast.error(err.message)
        }
    })

    return { signUp, isLoading }
}