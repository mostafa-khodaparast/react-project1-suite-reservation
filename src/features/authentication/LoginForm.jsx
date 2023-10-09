import { useState } from "react";
import { useLogin } from "./useLogin";
import MiniSpinner from "../../ui/MiniSpinner";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [email, setEmail] = useState("mostafa.khodaparast1997@gmail.com")
  const [password, setPassword] = useState("11111111")
  const { login, isLoading } = useLogin()    //useLogin is a custome hook
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) return
    login({ email, password })
  }

  return (
    <div className="">
      <header className="flex flex-col items-center">
        <img src="/logo-light.png" className="mt-10  h-40 bg-none object-cover" />
        <span className=" text-2xl font-bold text-stone-700 pt-8 font-beyekan dark:text-stone-300 ">وارد حساب کاربری خود شوید</span>
      </header>

      <form dir="rtl" onSubmit={handleSubmit} className="w-full mt-1 p-4 flex flex-col font-beyekan font-bold items-center space-y-4">
        <input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          className="formInput"
          placeholder="ایمیل"
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          className="formInput"
          placeholder="گذر واژه"
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex w-1/2 justify-center">
          <button
            className="w-1/4 hover:bg-blue-400 text-xl font-beyekan cursor-pointer bg-blue-500 font-semibold hover:text-blue-700 text-stone-300 py-4 px-4 ml-2 mt-4 rounded-sm transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? <MiniSpinner /> : 'ورود'}
          </button>
          <button
            className="w-1/4 hover:bg-blue-400 text-xl font-beyekan cursor-pointer bg-blue-500 font-semibold hover:text-blue-700 text-stone-300 py-4 px-4 mt-4 rounded-sm transition-all duration-300"
            onClick={() => navigate('/signup')}
          >
            ثبت نام
          </button>
        </div>
      </form>

    </div>
  );
}

export default LoginForm;
