import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
// import styles from "./Login.module.css";
// import PageNav from "../components/PageNav";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("judith29@gmail.com");
  const [password, setPassword] = useState("qwerty");
  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  useEffect(
    function () {
      if (isAuthenticated) navigate("/shop", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  return (
    <main className="w-full h-screen flex justify-center items-center bg-whyte">
      {/* <PageNav /> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email">Email address: </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            className="py-1 px-1.5 border border-rblue rounded-md text-sm placeholder:text-gray-100 focus:outline-rblue focus:outline-[0.5px] shadow-md "
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="py-1 px-1.5 border border-rblue rounded-md text-sm placeholder:text-black focus:outline-rblue focus:outline-[0.5px] shadow-md"
          />
        </div>

        <div className="mt-4 w-full flex justify-center">
          <Button
            style={{
              color: "#fafafa",
              backgroundColor: "#0b69ff",
              padding: "0.2rem 2rem",
            }}
          >
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
