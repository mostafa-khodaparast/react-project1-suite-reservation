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
      toast.success('سوییت باموفقیت ساخته شد')
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
      toast.success('سوییت باموفقیت ویرایش شد')
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
    <form onSubmit={handleSubmit(onSubmit)} className="form-control bg-slate-400 border w-[80%] mx-auto rounded-sm border-stone-100 my-4 p-4 flex flex-col space-y-4">
      <input
        type="text"
        id="name"
        placeholder="نام سوئیت"
        className="formInput font-beyekan"
        {...register('name', {
          required: 'پُرکردن این فیلد اجباری است'
        })}
      />
      {formState.errors?.name?.message && <p className=" text-sm text-red-600 font-beyekan font-semibold w-1/2 m-auto">{formState.errors.name.message}</p>}

      <input
        type="number"
        id="maxCapacity"
        placeholder="ظرفیت"
        className="formInput font-beyekan"
        {...register('maxCapacity', {
          required: 'پُرکردن این فیلد اجباری است',
          min: {
            value: 1,
            message: 'حداقل ظرفیت یک نفر است'
          }
        })}
      />
      {formState.errors?.maxCapacity?.message && <p className=" text-sm font-beyekan font-semibold text-red-600 w-1/2 m-auto">{formState.errors.maxCapacity.message}</p>}

      <input
        type="number"
        id="regularPrice"
        placeholder="قیمت"
        className="formInput font-beyekan"
        {...register('regularPrice', {
          required: 'پُرکردن این فیلد اجباری است',
          min: {
            value: 100,
            message: 'حداقل قیمت 100 هزار تومان است'
          }
        })}
      />
      {formState.errors?.regularPrice?.message && <p className=" text-sm font-beyekan font-semibold text-red-600  w-1/2 m-auto">{formState.errors.regularPrice.message}</p>}

      <input
        type="number"
        id="discount"
        defaultValue={0}
        placeholder="تخفیف"
        className="formInput font-beyekan"
        {...register('discount', {
          required: 'پُرکردن این فیلد اجباری است',
          validate: value => getValues().regularPrice >= value || 'تخفیف باید کمتر از قیمت سوئیت باشد'
        })}
      />
      {formState.errors?.discount?.message && <p className=" text-sm font-beyekan font-semibold text-red-600 w-1/2 m-auto">{formState.errors.discount.message}</p>}


      <div className="flex space-x-1 items-center justify-center w-1/2 mx-auto">
        <button
          type="reset"
          className="hover:text-red-700 font-beyekan font-semibold hover:bg-red-300 bg-red-100 text-red-500 rounded-md py-2 px-3 w-1/2 m-auto transition-all duration-300 focus:outline-none focus:ring focus:ring-red-100 focus:ring-offset-1"
        >
          ریست
        </button>
        <button
          className="hover:text-green-700 font-beyekan font-semibold hover:bg-green-300 bg-green-100 text-green-500 rounded-md py-2 px-3 w-1/2 m-auto transition-all duration-300 focus:outline-none focus:ring focus:ring-green-100 focus:ring-offset-1"
        >
          {isEditing ? 'ثبت ویرایش' : 'افزودن'}
        </button>
      </div>
    </form>
  );
}

export default CreateCabinForm;


