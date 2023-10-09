import Logo from "./Logo"
import MainNav from "./MainNav"

const Sidebar = () => {
    return (
        <aside className="bg-[#fff] dark:bg-[#111827] row-span-2">
            <Logo />
            <MainNav />
        </aside>
    )
}

export default Sidebar