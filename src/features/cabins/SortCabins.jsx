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
            <select onChange={handleSelect} className="bg-blue-500 hover:cursor-pointer focus:outline-none py-1 text-stone-100 px-4 ml-2 border-none  rounded-sm transition-all duration-300">
                <option value="name-asc">sort by name(A-Z)</option>
                <option value="name-desc">sort by name(Z-A)</option>
                <option value="regularPrice-desc">sort by price(high first)</option>
                <option value="regularPrice-asc">sort by price(low first)</option>
                <option value="maxCapacity-desc">sort by capacity(high first)</option>
                <option value="maxCapacity-asc">sort by capacity(low first)</option>
            </select>
        </div>
    )
}


export default SortCabins