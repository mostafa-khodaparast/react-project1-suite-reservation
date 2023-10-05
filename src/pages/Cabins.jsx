import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import FilterCabins from "../features/cabins/FilterCabins";
import SortCabins from "../features/cabins/SortCabins";


function Cabins() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-between font-semibold">
        <button
          onClick={() => setShowForm(!showForm)}
          className="mr-3 hover:bg-blue-700 bg-blue-500 font-semibold hover:text-stone-300 text-stone-100 py-1 px-4 rounded-sm transition-all duration-300"
        >
          Add new cabin
        </button>
        <FilterCabins />
        <SortCabins />
      </div>
      {showForm ? <CreateCabinForm /> : null}
      <CabinTable />
    </div>
  );
}

export default Cabins;
