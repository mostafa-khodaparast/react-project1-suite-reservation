import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import PageNav from "../components/PageNav";

import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./Login.module.css";


const Login = () => {
  const [email, setEmail] = useState("mostafa.khodaparast1997@gmail.com");
  const [password, setPassword] = useState("1234");
  const { login, isAuthenticated, error } = useAuth();
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }


  useEffect(() => {
      if (isAuthenticated) navigate("/app", { replace: true });
    }, [isAuthenticated, navigate]);


  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
          {error ? <p style={{fontSize: '1.4rem'}}>{error}</p> : null}
        </div>
      </form>
    </main>
  );
}

export default Login
