import { useMutation } from "@tanstack/react-query"
import { apiSignUp } from "../../services/apiAuth"
import { toast } from "react-hot-toast"

export const useSignup = () => {

    const { mutate: signUp, isLoading } = useMutation({
        mutationFn: apiSignUp,
        onSuccess: () => {
            toast.success('ثبت نام باموفقیت انجام شد')
        },
        onError: () => {
            toast.error("ثبت نام باخطا مواجه شد")
        }
    })

    return { signUp, isLoading }
}