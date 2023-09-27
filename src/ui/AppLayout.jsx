import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

const AppLayout = () => {
    return (
        <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[16rem_1fr] overflow-hidden">
            <Header />
            <Sidebar />
            <main className="m-5 overflow-y-scroll">
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout