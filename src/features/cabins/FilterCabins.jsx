import { useSearchParams } from "react-router-dom"

const FilterCabins = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    function handleDiscount(value) {
        searchParams.set('discount', value)
        setSearchParams(searchParams)
    }

    return (
        <div>
            <button onClick={() => handleDiscount('all')}
                className="hover:bg-blue-700 bg-blue-500 hover:text-stone-300 text-stone-100 py-1 px-4  rounded-sm transition-all duration-300"
            >
                all
            </button>
            <button onClick={() => handleDiscount('with-discount')}
                className=" hover:bg-blue-700 bg-blue-500 hover:text-stone-300 py-1 px-4 text-stone-100 ml-2 mr-0  rounded-sm transition-all duration-300"
            >
                with-discount
            </button>
        </div>
    )
}

export default FilterCabins