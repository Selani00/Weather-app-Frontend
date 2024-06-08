import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import GoogleAuth from "../../components/GoogleAuth";

const Registration = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmpassword === ""
    ) {
      alert("All fields are required");
    } else if (formData.password !== formData.confirmpassword) {
      alert("password and confirm password should be same");
    } else {
      // if so I need to keep only the password in the formData
      delete formData.confirmpassword;
      try {
        const response = await fetch("http://localhost:4000/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        alert(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="min-h-screen md:p-10 py-10 px-5 flex items-center justify-center">
      <div className="shadow-lg w-full mx-auto max-w-4xl">
        <div className="flex p-3 max-w-2xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* left */}
          <div className=" flex-1">
            <div className="p-1 py-5">
              <h1 className="text-center mb-5 font-bold text-3xl">
                Create Account
              </h1>

              <form
                className="flex flex-col gap-5 py-5"
                onSubmit={handleSubmit}
              >
                <GoogleAuth />
                <p className=" text-xs text-center">Or Register with email</p>

                <div>
                  <Label value="Your Name"></Label>
                  <TextInput
                    type="text"
                    placeholder="UserName"
                    id="username"
                    onChange={handleChange}
                  ></TextInput>
                </div>

                <div>
                  <Label value="Your Email"></Label>
                  <TextInput
                    type="email"
                    placeholder="example@gmail.com"
                    id="email"
                    onChange={handleChange}
                  ></TextInput>
                </div>

                <div className="md:flex gap-5">
                  <div className="flex-1">
                    <Label value="Password"></Label>
                    <TextInput
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={handleChange}
                    ></TextInput>
                  </div>

                  <div className="flex-1">
                    <Label value="Confirm Password"></Label>
                    <TextInput
                      type="password"
                      placeholder="Confirm Password"
                      id="confirmpassword"
                      onChange={handleChange}
                    ></TextInput>
                  </div>
                </div>

                <Button
                  type="submit"
                  value="Login"
                  gradientDuoTone="purpleToBlue"
                >
                  Register
                </Button>
              </form>

              
            </div>
          </div>

          {/* Right */}
          <div className="">
          <div className=" md:p-4 text-center">
              <h1 className="text-3xl font-bold text-black my-5">
                Welcome Back!
              </h1>
              <p className="text-base my-3">
                Your Already with Us? <br /> Please login with your account
              </p>
              <Button pill outline gradientDuoTone="purpleToBlue"  href="/login" className="my-5"> 
                SIGN IN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
