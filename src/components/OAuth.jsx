import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const OAuth = () => {
  const navigate = useNavigate();
  const onGoogleClick = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    navigate("/");
  };
  return (
    <button
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-600 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 shadow-md hover:shadow-lg rounded"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with google
    </button>
  );
};

export default OAuth;
