import { useSearchParams } from "react-router-dom"

const FilterCabins = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    function handleDiscount(value) {
        searchParams.set('discount', value)
        setSearchParams(searchParams)
    }

    return (
        <div className=" font-beyekan">
            <button onClick={() => handleDiscount('همه')}
                className="hover:bg-blue-700 bg-blue-500 ml-1 hover:text-stone-300 text-stone-100 py-1 px-4  rounded-sm transition-all duration-300"
            >
                همه
            </button>
            <button onClick={() => handleDiscount('باتخفیف')}
                className=" hover:bg-blue-700 bg-blue-500 hover:text-stone-300 py-1 px-4 text-stone-100 ml-2 mr-0  rounded-sm transition-all duration-300"
            >
                باتخفیف
            </button>
        </div>
    )
}

export default FilterCabins