import React, { useState } from "react";
import { Button, Label, TextInput, Spinner } from "flowbite-react";
import GoogleAuth from "../../components/GoogleAuth";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import {signInScuccess} from "../../redux/user/userSlice";
import RegistrationImage from "../../assets/registration.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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
      toast.error("All fields are required", { position: "top-right" });
    } else if (formData.password !== formData.confirmpassword) {
      toast.error("Passwords do not match", { position: "top-right" });
    } else {    
      delete formData.confirmpassword;
      try {
        setLoading(true);
        const response = await fetch("https://us-central1-weather-app-3a7ba.cloudfunctions.net/api/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.success === false) {
          toast.error(data.message, { position: "top-right" });        
        }

        if (response.ok) {
          dispatch(signInScuccess(data));
          navigate("/weather");
        }
      } catch (err) {
        toast.error(err.message, { position: "top-right" });
      }
    }
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmpassword: ""
    });
    setLoading(false);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2 }}
      variants={{
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="min-h-screen md:p-10 py-10 px-5 flex items-center justify-center bg-gradient-to-r from-blue-900 via-indigo-600 to-blue-900">
        <div className="container relative z-2 shadow-2xl w-full mx-auto max-w-4xl bg-white rounded-3xl">
          <div className="flex p-3 max-w-2xl mx-auto flex-col md:flex-row md:items-center gap-5">
            {/* left */}
            <div className=" flex-1">
              <div className="p-1 py-5">
                <h1 className="text-center mb-5 font-bold text-3xl">
                  Create Account
                </h1>
                <GoogleAuth />

                <form
                  className="flex flex-col gap-5 py-5"
                  onSubmit={handleSubmit}
                >
                  
                  <p className=" text-xs text-center">Or Register with email</p>

                  <div>
                    <Label value="Your Name"></Label>
                    <TextInput
                      type="text"
                      placeholder="UserName"
                      id="username"
                      value={formData.username}
                      onChange={handleChange}
                    ></TextInput>
                  </div>

                  <div>
                    <Label value="Your Email"></Label>
                    <TextInput
                      type="email"
                      placeholder="example@gmail.com"
                      id="email"
                      value={formData.email}
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
                        value={formData.password}
                        onChange={handleChange}
                      ></TextInput>
                    </div>

                    <div className="flex-1">
                      <Label value="Confirm Password"></Label>
                      <TextInput
                        type="password"
                        placeholder="Confirm Password"
                        id="confirmpassword"
                        value={formData.confirmpassword}
                        onChange={handleChange}
                      ></TextInput>
                    </div>
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
                      "SIGN UP"
                    )}
                  </Button>
                </form>
                <div className="flex gap-2 text-sm">
                  <span>Have an account ?</span>
                  <Link to="/login" className="text-blue-500 hover:underline">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex-1 gap-5 py-8 hidden lg:inline">
              <img
                src={RegistrationImage}
                alt="registration"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <ToastContainer
          autoClose={2500}
          hideProgressBar={true}
          theme="colored"
        />
      </div>
    </motion.div>
  );
};

export default Registration;
