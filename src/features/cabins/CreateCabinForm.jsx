import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createEditCabins } from "../../services/apiCabins";
import { toast } from "react-hot-toast";


function CreateCabinForm({ editCabinObj = {} }) {

  const { id: editId, ...editValues } = editCabinObj
  const isEditing = Boolean(editId)

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditing ? editValues : {}
  })

  const queryClient = useQueryClient()


  const { mutate: createCabin } = useMutation({
    mutationFn: createEditCabins,
    onSuccess: () => {
      toast.success('cabin created successfully')
      queryClient.invalidateQueries({                //update UI
        queryKey: ['cabins']
      })
      reset()
    },
    onError: (err) => toast.error(err.message)
  })

  
  const { mutate: editCabin } = useMutation({
    mutationFn: ({ newCabin, id }) => createEditCabins(newCabin, id),
    onSuccess: () => {
      toast.success('cabin edited successfully')
      queryClient.invalidateQueries({                //update UI
        queryKey: ['cabins']
      })
    },
    onError: (err) => toast.error(err.message)
  })


  function onSubmit(data) {
    if (isEditing) {
      editCabin({ newCabin: {...data}, id: editId })
    }
    else {
      createCabin(data)
    }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-control bg-slate-400 border w-[80%] mx-auto border-stone-100 my-4 p-4 flex flex-col space-y-4">
      <input
        type="text"
        id="name"
        placeholder="Cabin name"
        className="formInput"
        {...register('name', {
          required: 'cabin name is required'
        })}
      />
      {formState.errors?.name?.message && <p className=" text-sm text-red-600 w-1/2 m-auto">{formState.errors.name.message}</p>}

      <input
        type="number"
        id="maxCapacity"
        placeholder="Maximum capacity"
        className="formInput"
        {...register('maxCapacity', {
          required: 'max capacity is required',
          min: {
            value: 1,
            message: 'max capacity should be at least 1'
          }
        })}
      />
      {formState.errors?.maxCapacity?.message && <p className=" text-sm text-red-600 w-1/2 m-auto">{formState.errors.maxCapacity.message}</p>}

      <input
        type="number"
        id="regularPrice"
        placeholder="Regular price"
        className="formInput"
        {...register('regularPrice', {
          required: 'regular price is required',
          min: {
            value: 100,
            message: 'regular price should be at least 100'
          }
        })}
      />
      {formState.errors?.regularPrice?.message && <p className=" text-sm text-red-600 w-1/2 m-auto">{formState.errors.regularPrice.message}</p>}

      <input
        type="number"
        id="discount"
        placeholder="Discount"
        className="formInput"
        {...register('discount', {
          required: 'discount is required',
          validate: value => getValues().regularPrice >= value || 'discount should be less than regular price'
        })}
      />
      {formState.errors?.discount?.message && <p className=" text-sm text-red-600 w-1/2 m-auto">{formState.errors.discount.message}</p>}


      <div className="flex space-x-1 items-center justify-center w-1/2 mx-auto">
        <button
          type="reset"
          className="hover:text-red-700 hover:bg-red-300 bg-red-100 text-red-500 rounded-md py-2 px-3 w-1/2 m-auto transition-all duration-300 focus:outline-none focus:ring focus:ring-red-100 focus:ring-offset-1"
        >
          reset
        </button>
        <button
          className="hover:text-green-700 hover:bg-green-300 bg-green-100 text-green-500 rounded-md py-2 px-3 w-1/2 m-auto transition-all duration-300 focus:outline-none focus:ring focus:ring-green-100 focus:ring-offset-1"
        >
          {isEditing ? 'edit' : 'Add Cabin'}
        </button>
      </div>
    </form>
  );
}

export default CreateCabinForm;


