import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInScuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();

    // Add custome provider parameters for Google. cz we need to always select the email
    provider.setCustomParameters({
      prompt: "select_account",
    });

    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("https://weather-app-m4zg.onrender.com/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        dispatch(signInScuccess(data));
        navigate("/weather");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <button
      className="px-4 py-2 w-full border flex items-center justify-center gap-3 border-slate-500 rounded-lg text-black hover:border-slate-400  hover:shadow transition duration-150"
      onClick={handleGoogleClick}
    >
      <img
        className="w-6 h-6"
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
      <span >Login with Google</span>
    </button>
  );
};

export default GoogleAuth;
