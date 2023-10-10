import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"
import { useDarkMode } from "../context/DarkModeContext"

const Darkmode = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode()

    return (
        <p onClick={() => toggleDarkMode()} className=" cursor-pointer text-2xl">
            {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </p>
    )
}

export default Darkmode