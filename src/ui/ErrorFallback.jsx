const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div className="w-screen h-screen text-stone-500 dark:text-[#d1d5db] flex items-center justify-center bg-[#f9fafb]  dark:bg-[#111827] ">
            <div className="bg-[#fff] dark:bg-[#374151] flex flex-col items-center border border-solid border-[#f3f4f6] rounded-md p-8 sm:p-16">
                <h1 className="font-bold font-beyekan  pb-6">
                    برنامه با مشکل مواجه شده است. لحظاتی دیگر تلاش کنید
                </h1>
                <span>{error.message}</span>
                <button
                    onClick={resetErrorBoundary}
                    className="mx-3 hover:bg-blue-700 bg-blue-500 text-blue-950 font-beyekan font-semibold hover:text-stone-300 py-1 px-4 mt-4 rounded-md transition-all duration-300"
                >
                    بازگشتن به صفحه اصلی
                </button>
            </div>
        </div>
    )
}

export default ErrorFallback