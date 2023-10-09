import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "../services/apiAuth"
import Spinner from "./Spinner"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate()

    const { data: user, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentUser
    })

    let authenticated = user?.role === 'authenticated'
    
    useEffect(() => {
        if (!authenticated && !isLoading) navigate('/login')
    }, [isLoading, authenticated, navigate])


    if (isLoading) return <Spinner />

    if (authenticated) return children
}

export default ProtectedRoute