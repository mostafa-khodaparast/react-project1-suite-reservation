import { useForm } from "react-hook-form";
import { useSignup } from "../features/authentication/useSignup";



const SignupForm = () => {
  const { register, handleSubmit, formState } = useForm()
  const { signUp, isLoading } = useSignup()  //useSignup is a custome hook


  function onsubmit({ fullname, email, password }) {
    signUp({ fullname, email, password })
  }

  return (
    <div className="mt-10">
      <header className="flex flex-col items-center">
        <img src="/logo-light.png" className="  h-40 bg-none object-cover" />
        <span className=" text-2xl font-bold text-stone-700 pt-8 font-beyekan ">به صفحه ثبت نام خوش آمدید</span>
      </header>

      <form dir="rtl" onSubmit={handleSubmit(onsubmit)} className=" font-beyekan font-semibold w-[80%] mx-auto rounded-sm my-4 p-4 flex flex-col items-start space-y-4">
        <input
          type="text"
          placeholder="نام کاربری"
          className="formInput"
          {...register('fullname', { required: 'پُرکردن این فیلد اجباری است' })}
        />
        {formState.errors?.fullname?.message && <span className="text-red-600 text-sm pr-72">{formState.errors?.fullname?.message}</span>}

        <input
          type="text"
          placeholder="ایمیل"
          className="formInput"
          {...register('email', {
            required: 'پُرکردن این فیلد اجباری است',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'ایمیل نامعتبر'
            }
          })}
        />
        {formState.errors?.email?.message && <span className="text-red-600 text-sm pr-72">{formState.errors?.email?.message}</span>}

        <input
          type="password"
          placeholder="گذرواژه"
          className="formInput"
          {...register('password', {
            required: 'پُرکردن این فیلد اجباری است',
            minLength: {
              value: 8,
              message: 'حداقل طول گذرواژه هشت کاراکتر است'
            }
          })}
        />
        {formState.errors?.password?.message && <span className="text-red-600 text-sm pr-72">{formState.errors?.password?.message}</span>}

        <button className="hover:text-green-700 font-beyekan font-semibold hover:bg-green-300 bg-green-100 text-green-500 rounded-md py-2 px-3 w-1/2 m-auto transition-all duration-300 focus:outline-none focus:ring focus:ring-green-100 focus:ring-offset-1">
          افزودن کاربر جدید
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
