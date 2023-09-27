import Logo from "./Logo"
import MainNav from "./MainNav"

const Sidebar = () => {
    return (
        <aside
            className="bg-[#fff] border border-r-[#f3f4f6] row-span-full"
        >
            <Logo />
            <MainNav />
        </aside>
    )
}

export default Sidebar