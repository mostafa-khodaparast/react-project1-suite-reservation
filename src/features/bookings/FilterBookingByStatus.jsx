import { useSearchParams } from "react-router-dom"


const FilterBookingByStatus = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    function handleSelect(e) {
        searchParams.set('bookingsStatus', e.target.value)
        setSearchParams(searchParams)
    }

    return (
        <div className="flex space-x-2">
            <span>filter by status : </span>
            <select onChange={handleSelect} className="bg-blue-500 hover:cursor-pointer focus:outline-none py-1 text-stone-100 px-4 ml-2 border-none  rounded-sm transition-all duration-300">
                <option value="all">all</option>
                <option value="unconfirmed">unconfirmed</option>
                <option value="check-out">check-out</option>
                <option value="check-in">check-in</option>
            </select>
        </div>
    )
}

export default FilterBookingByStatus