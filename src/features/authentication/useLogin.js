import { useMutation } from "@tanstack/react-query"
import { apiAuth } from "../../services/apiAuth"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export const useLogin = () => {

    const navigate = useNavigate()

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => apiAuth({ email, password }),
        onSuccess: () => {
            navigate('/dashboard')
        },
        onError: (err) => {
            toast.error("ایمیل یا گذرواژه اشتباه است")
        }
    })

    return { login, isLoading }
}

