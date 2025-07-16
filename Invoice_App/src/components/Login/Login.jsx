import React, { useState } from "react";
import Button from "../Button";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../fireBase/fireBase";
import { login } from "../../../store/authSlice";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userData = userCredential.user;

        dispatch(login(userData));
        // console.log("Data send to store :",userData);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-white lg:h-[500px] lg:w-[700px] h-[700px] w-[450px]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-2 h-full w-full">
          <div className="left text-white mr-[40px]">
            <Logo width="250px" />
          </div>
          <div className="right text-white mr-8">
            <h1 className="text-4xl font-bold mb-3 ">Welcome to Invoicely</h1>
            <p className="text-[#00d8d8] text-xl font-bold ml-12 mb-2">
              Sign in to your account
            </p>
            <p className="text-gray-600 font-semibold ml-12 mb-6">
              Don't have any account?{" "}
              <span
                className="hover:underline  hover:text-gray-200 cursor-pointer text-white"
                onClick={() => navigate("/register")}
              >
                {" "}
                Sign Up
              </span>{" "}
            </p>
            <form className="flex flex-col gap-4" onSubmit={submitHandler}>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                childrenText="Login"
                className="hover:bg-transparent hover:border-2 border-[#00d8d8] transition"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
