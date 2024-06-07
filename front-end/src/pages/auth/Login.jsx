import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Label, TextInput, Spinner } from "flowbite-react";

import { useDispatch, useSelector } from "react-redux";
import {
  signInScuccess,
  signInFailure,
  signInStart,
} from "../../redux/user/userSlice";

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
    <div className="min-h-screen my-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <h1>For image</h1>
        </div>

        {/* Right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
              gradientDuoTone="purpleToPink"
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loding</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <div className="flex gap-2 text-sm mt-5">
              <span>Don't have an account ?</span>
              <Link
                to="/registration"
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
