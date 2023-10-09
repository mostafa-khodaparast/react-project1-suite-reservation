import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"
import { getCabins } from "../../services/apiCabins"
import Spinner from "../../ui/Spinner"
import SingleCabin from "./SingleCabin"


const CabinTable = () => {

  const { isLoading, data } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins
  })

  const [searchParams] = useSearchParams()

  //filter
  const discountFilter = searchParams.get('discount') || 'همه'
  let cabinsWithDiscountFilter
  if (discountFilter === 'همه') cabinsWithDiscountFilter = data
  if (discountFilter === 'باتخفیف') cabinsWithDiscountFilter = data.filter(cabin => cabin.discount > 0)

  //sort
  const sortBy = searchParams.get('sortBy') || ''
  const [fieldName, direction] = sortBy.split('-')
  const modifier = direction === 'asc' ? 1 : -1
  const sortedCabin = cabinsWithDiscountFilter?.sort((a, b) => (a[fieldName] - b[fieldName]) * modifier)


  if (isLoading) return <Spinner />

  return (
    <>
      <div className="grid grid-cols-6  w-[90%] font-beyekan text-center font-semibold mt-3 mx-auto bg-slate-300 py-2">
        <div>شماره سوییت</div>
        <div>ظرفیت</div>
        <div>قیمت</div>
        <div>تخفیف</div>
        <div className="col-span-2"></div>
      </div>
      {sortedCabin.map(cabin => <SingleCabin cabin={cabin} key={cabin.id} />)}
    </>
  )
}

export default CabinTable