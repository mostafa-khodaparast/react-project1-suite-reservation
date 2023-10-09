
import { useNavigate } from "react-router-dom";


const PageNotFound = () => {

  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#f9fafb]">
      <div className="bg-[#fff] border border-solid border-[#f3f4f6] rounded-md p-8 sm:p-16">
        <h1 className="font-bold font-beyekan text-stone-500 pb-6">
          ...صفحه مورد نظر یافت نشد
        </h1>
        <button 
        onClick={() => navigate(-1)}
        className="font-semibold text-stone-500 font-beyekan hover:text-stone-800"
        >
          &larr; برگرد
        </button>
      </div>
    </div>
  )
}

export default PageNotFound;
