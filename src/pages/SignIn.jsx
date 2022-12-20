import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormdata((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <section>
      <h1 className="text-center text-3xl mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 mx-auto max-w-6xl">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] m-6">
          <form>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
              className="w-full rounded transition ease-in-out"
            />
            <div className="relative mt-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Enter your password"
                className="w-full rounded transition ease-in-out"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="absolute right-3 top-2 cursor-pointer text-xl"
                />
              ) : (
                <AiFillEye
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="absolute right-3 top-2 cursor-pointer text-xl"
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mt-6">
                Don't Have an account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-100 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p className="mt-6">
                <Link to="/forget-password" className="text-blue-600">
                  Forget Password
                </Link>
              </p>
            </div>
          </form>
          <button
            type="submit"
            className="mt-3 w-full bg-blue-600 text-white py-3 px-7 text-sm uppercase rounded shadow-md hover:bg-blue-500 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
          >
            Sign In
          </button>
          <div className="flex items-center before:border-t before:border-gray-200 before:flex-1 after:border-t after:border-gray-200 after:flex-1 my-4">
            <p className="text-center mx-4">OR</p>
          </div>
          <OAuth/>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
