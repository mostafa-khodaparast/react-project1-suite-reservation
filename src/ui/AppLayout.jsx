import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

const AppLayout = () => {
    return (
        <div className="h-screen grid grid-rows-[5rem_1fr] grid-cols-4 overflow-hidden">
            <Header />
            <Sidebar />
            <main className="m-5 overflow-y-scroll col-span-3">
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout