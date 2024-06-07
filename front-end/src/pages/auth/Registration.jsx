import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen my-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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

            <div>
              <Label value="Your Password"></Label>
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              ></TextInput>
            </div>

            <div>
              <Label value="Your Password"></Label>
              <TextInput
                type="password"
                placeholder="Confirm Password"
                id="confirmpassword"
                onChange={handleChange}
              ></TextInput>
            </div>

            <Button type="submit" value="Login" gradientDuoTone="purpleToPink">
              Register
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account ?</span>
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1">For email image</div>
      </div>
    </div>
  );
};

export default Registration;
