import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Label, TextInput, Spinner } from "flowbite-react";

import { useDispatch, useSelector } from "react-redux";
import {
  signInScuccess,
  signInFailure,
  signInStart,
} from "../../redux/user/userSlice";
import GoogleAuth from "../../components/GoogleAuth";

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //to get the error msg and loading we use useSelector
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.password === "") {
      return dispatch(signInFailure("All fields are required"));
    }
    try {
      dispatch(signInStart());
      const response = await fetch("http://localhost:4000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      //to get the login details
      console.log(data);

      if (response.ok) {
        dispatch(signInScuccess(data));
        navigate("/weather");
      }
    } catch (err) {
      dispatch(signInFailure(err.message));
    }
  };

  return (
    <div className="min-h-screen md:p-10 py-10 px-5 flex items-center justify-center">
      <div className=" shadow-lg w-full mx-auto max-w-4xl">
        <div className="flex  max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* Right */}
          <div className="md:order-2 flex-1">
            <div className="p-1 md:p-3 py-5">
              <h1 className="text-center mb-5 font-bold text-3xl">
                Welcome Back
              </h1>
              <form className="flex flex-col gap-5 py-5" onSubmit={handleSubmit}>
                <GoogleAuth />

                <p className=" text-xs text-center">Or Login with email</p>
                <div>
                  <Label value="Your Email"></Label>
                  <TextInput
                    type="email"
                    placeholder="example@gmail.com"
                    id="email"
                    onChange={handleChange}
                  ></TextInput>
                </div>

                <div>
                  <Label value="Your Password"></Label>
                  <TextInput
                    type="password"
                    placeholder="************"
                    id="password"
                    onChange={handleChange}
                  ></TextInput>
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  gradientDuoTone="purpleToBlue"
                >
                  {loading ? (
                    <>
                      <Spinner size="sm" />
                      <span className="pl-3">Loding</span>
                    </>
                  ) : (
                    "SIGN IN"
                  )}
                </Button>
              </form>

              
            </div>
          </div>

          {/* left */}
          <div className="flex-1 flex flex-col gap-5 py-10 items-center justify-center ">
            <div className=" md:p-4 text-center">
              <h1 className="text-3xl font-bold text-black my-5">
                Hello, Friend!
              </h1>
              <p className="text-base my-3">
                Let's make an Account <br /> and Start journey with us
              </p>
              <Button pill outline gradientDuoTone="purpleToBlue"  href="/registration" className="my-5"> 
                SIGN UP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
