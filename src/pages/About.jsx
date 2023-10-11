
const About = () => {
    return (
        <div dir="rtl" className=" w-[80%] mx-auto mt-10 text-blue-950 dark:text-stone-300 font-beyekan">
            <span className=" font-semibold text-xl">برنامه ی مدیریت سوئیت هتل برای کارکنال هتل</span>
            <h1 className="font-bold text-2xl py-5">تکنولوژی ها:</h1>
            <div className="mt-2 p-2 font-semibold rounded-lg text-blue-950 bg-stone-300">react: فریمورک سمت فرانت</div>
            <div className="mt-2 p-2 font-semibold rounded-lg text-blue-950 bg-stone-300">react-query:مدیریت  global state سمت سرور که به کمک supabase پیاده شده</div>
            <div className="mt-2 p-2 font-semibold rounded-lg text-blue-950 bg-stone-300">context api: مدیریت global state سمت کاربر که برای تغییر تم استفاده کردم </div>
            <div className="mt-2 p-2 font-semibold rounded-lg text-blue-950 bg-stone-300">supabase:   بک اند پروژه برای پیاده سازی جداول</div>
            <div className="mt-2 p-2 font-semibold rounded-lg text-blue-950 bg-stone-300">react-router: برای مسیریابی پروژه</div>
            <div className="mt-2 p-2 font-semibold rounded-lg text-blue-950 bg-stone-300">tailwind: برای استایل دهی پروژه</div>
        </div>
    )
}

export default About