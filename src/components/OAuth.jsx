import React from "react";
import { FcGoogle } from "react-icons/fc";
const OAuth = () => {
  return (
    <button className="flex items-center justify-center w-full bg-red-600 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 shadow-md hover:shadow-lg rounded">
      <FcGoogle className="text-2xl bg-white rounded-full mr-2"/>
      Continue with google
    </button>
  );
};

export default OAuth;
