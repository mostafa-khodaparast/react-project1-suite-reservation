import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import FilterCabins from "../features/cabins/FilterCabins";
import SortCabins from "../features/cabins/SortCabins";


function Cabins() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div dir="rtl" className="flex flex-col items-center">
      <div className="flex flex-row items-center space-x-28 font-semibold">
        <div className="flex items-center space-x-2 mr-10">
          <span className="font-semibold font-beyekan ml-2">فیلتر براساس تخفیف: </span>
          <FilterCabins />
        </div>
        <SortCabins />
        <button
          onClick={() => setShowForm(!showForm)}
          className="mx-3 hover:bg-blue-700 bg-blue-500 font-beyekan font-semibold hover:text-stone-300 text-stone-100 py-1 px-4 rounded-sm transition-all duration-300"
        >
         سوئیت جدید
        </button>
      </div>
      {showForm ? <CreateCabinForm /> : null}
      <CabinTable />
    </div>
  );
}

export default Cabins;
