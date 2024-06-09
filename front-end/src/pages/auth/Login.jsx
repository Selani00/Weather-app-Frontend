import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Label, TextInput, Spinner } from "flowbite-react";
import LoginImage from "../../assets/login.png";
import { useDispatch } from "react-redux";
import { signInScuccess } from "../../redux/user/userSlice";
import GoogleAuth from "../../components/GoogleAuth";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      toast.error("All fields are required", { position: "top-right" });
    }
    try {
      setLoading(true);
      const response = await fetch(
        "https://us-central1-weather-app-3a7ba.cloudfunctions.net/api/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

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
        <div className="shadow-2xl w-full mx-auto max-w-4xl bg-white  rounded-3xl">
          <div className="flex p-5 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
            {/* Right */}
            <div className="md:order-2 flex-1 ">
              <div className="p-1 md:p-3 py-5">
                <h1 className="text-center mb-5 font-bold text-3xl">
                  Welcome Back
                </h1>
                <GoogleAuth />
                <form
                  className="flex flex-col gap-5 py-5"
                  onSubmit={handleSubmit}
                >
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
                <div className="flex gap-2 text-sm ">
                  <span>Don't have an account ?</span>
                  <Link
                    to="/registration"
                    className="text-blue-500 hover:underline"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>

            {/* left */}
            <div className="flex-1  gap-5 py-10 hidden lg:inline">
              <img
                src={LoginImage}
                alt="login"
                className="object-cover w-120 h-120 "
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

export default Login;
