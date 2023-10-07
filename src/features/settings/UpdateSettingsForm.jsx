import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSettings, updateSetting } from "../../services/apiSettings";
import Spinner from "../../ui/Spinner";
import { toast } from "react-hot-toast";


function UpdateSettingsForm() {

  const queryClient = useQueryClient()

  const { isLoading, data } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings
  })

  const { mutate } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success('setting edited successfully')
      queryClient.invalidateQueries({                //update UI
        queryKey: ['settings']
      })
    },
    onError: (err) => toast.error(err.message)
  })


  function handleUpdate(e, fieldName) {
    if (!e.target.value) return;
    mutate({ [fieldName]: e.target.value })
  }


  if (isLoading) return <Spinner />

  return (
    <form className="form-control bg-slate-400 w-[80%] mx-auto my-4 p-4 flex flex-col space-y-4">
      <label htmlFor="min-nights" className="font-semibold"> Minimum nights/booking :</label>
      <input
        type='number'
        id='min-nights'
        className="formInput"
        defaultValue={data?.minBookingLengh}
        onBlur={e => handleUpdate(e, 'minBookingLengh')}
      />
      <label htmlFor="max-nights" className="font-semibold">Maximum nights/booking :</label>
      <input
        type='number'
        id='max-nights'
        className="formInput"
        defaultValue={data?.maxBookingLengh}
        onBlur={e => handleUpdate(e, 'maxBookingLengh')}
      />
      <label htmlFor="max-guests" className="font-semibold">Maximum guests/booking :</label>
      <input
        type='number'
        id='max-guests'
        className="formInput"
        defaultValue={data?.maxGuestsPerBooking}
        onBlur={e => handleUpdate(e, 'maxGuestsPerBooking')}
      />
      <label htmlFor="breakfast-price" className="font-semibold">Breakfast price :</label>
      <input
        type='number'
        id='breakfast-price'
        className="formInput"
        defaultValue={data?.breakfastPrice}
        onBlur={e => handleUpdate(e, 'breakfastPrice')}
      />
    </form>
  );
}

export default UpdateSettingsForm;
