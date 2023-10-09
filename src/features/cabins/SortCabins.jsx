import { useSearchParams } from "react-router-dom"

const SortCabins = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    function handleSelect(e) {
        searchParams.set('sortBy', e.target.value)
        setSearchParams(searchParams)
    }

    return (
        <div>
            {/* value names are choosen base on cabin table and we use dash for names to split and sort it easily  */}
            <span className=" font-beyekan">مرتب سازی براساس: </span>
            <select onChange={handleSelect} className="bg-blue-500 text-blue-950 hover:cursor-pointer font-beyekan focus:outline-none py-1 px-4 ml-2 border-none  rounded-sm transition-all duration-300">
                <option value="regularPrice-desc" className=" font-semibold text-blue-950">قیمت نزولی</option>
                <option value="regularPrice-asc" className=" font-semibold text-blue-950">قیمت صعودی</option>
                <option value="maxCapacity-desc" className=" font-semibold text-blue-950">ظرفیت نزولی</option>
                <option value="maxCapacity-asc" className=" font-semibold text-blue-950">ظرفیت صعودی</option>
            </select>
        </div>
    )
}


export default SortCabins