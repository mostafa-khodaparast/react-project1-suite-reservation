
import { useNavigate } from "react-router-dom";


const PageNotFound = () => {

  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen text-stone-500 dark:text-[#d1d5db] flex items-center justify-center bg-[#f9fafb]  dark:bg-[#111827] ">
      <div className="bg-[#fff] dark:bg-[#374151] border border-solid border-[#f3f4f6] rounded-md p-8 sm:p-16">
        <h1 className="font-bold font-beyekan  pb-6">
          ...صفحه مورد نظر یافت نشد
        </h1>
        <button 
        onClick={() => navigate(-1)}
        className="font-semibold font-beyekan hover:text-stone-800 hover:dark:text-[#f9fafb]"
        >
          &larr; برگرد
        </button>
      </div>
    </div>
  )
}

export default PageNotFound;
