import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { deleteCabins } from "../../services/apiCabins"
import { toast } from "react-hot-toast"
import CreateCabinForm from "./CreateCabinForm"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2"


const SingleCabin = ({ cabin }) => {

    const [editForm, setEditForm] = useState(false)

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: deleteCabins,
        onSuccess: () => {
            toast.success('سوئیت باموفقیت حذف شد')
            queryClient.invalidateQueries({                //update UI
                queryKey: ['cabins']
            })
        },
        onError: (err) => toast.error(err.message)
    })

    return (
        <div className=" bg-slate-300 w-[90%] text-blue-950 mx-auto my-1 rounded-sm">
            <div className="grid grid-cols-6 w-full mx-auto text-center" key={cabin.id}>
                <div className="self-center p-2">{cabin.name}</div>
                <div className="self-center p-2">{cabin.maxCapacity}</div>
                <div className="self-center p-2">{cabin.regularPrice}</div>
                <div className="self-center p-2">{cabin.discount}</div>
                <div className="col-span-2  p-2">
                    <button
                        onClick={() => mutate(cabin.id)}
                        className="hover:text-red-700 hover:bg-red-300 bg-red-100 text-red-500 rounded-md py-2 px-3 mr-2 transition-all duration-300"
                    >
                        <HiOutlineTrash />
                    </button>
                    <button
                        onClick={() => setEditForm(!editForm)}
                        className="hover:text-orange-700 hover:bg-orange-300 bg-orange-100 text-orange-500 rounded-md py-2 px-3 transition-all duration-300"
                    >
                        <HiOutlinePencil />
                    </button>
                </div>
            </div>
            {editForm ? <CreateCabinForm editCabinObj={cabin} /> : null}
        </div>
    )
}

export default SingleCabin