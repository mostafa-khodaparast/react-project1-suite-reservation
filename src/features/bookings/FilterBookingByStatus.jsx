import { useSearchParams } from "react-router-dom"


const FilterBookingByStatus = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    function handleSelect(e) {
        searchParams.set('bookingsStatus', e.target.value)
        setSearchParams(searchParams)
    }

    return (
        <div dir="rtl" className="flex items-center space-x-2 ml-14">
            <span className="font-semibold font-beyekan ml-2 mr-14">فیلتر براساس وضعیت : </span>
            <select onChange={handleSelect} className="bg-blue-500 hover:cursor-pointer font-semibold focus:outline-none py-2 text-stone-100 px-3 ml-2 border-none  rounded-sm transition-all duration-300">
                <option value="همه" className=" font-semibold font-bezar">همه</option>
                <option value="نامشخص" className=" font-semibold font-bezar">نامشخص</option>
                <option value="خروج" className=" font-semibold font-bezar">خروج</option>
                <option value="ورود" className=" font-semibold font-bezar">ورود</option>
            </select>
        </div>
    )
}

export default FilterBookingByStatus