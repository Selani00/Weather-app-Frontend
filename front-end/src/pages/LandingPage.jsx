import React from "react";
import { useSelector } from "react-redux";
import BackGroud from "../assets/Background.mp4";
import { TypeAnimation } from "react-type-animation";
import "../App.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="m-0 p-0 w-[100%] h-[100vh]">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,.5)]"></div>
      <video
        src={BackGroud}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute w-[100%] h-[100%] top-0 flex flex-col items-center justify-center text-white text-center px-5">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold  tracking-widest">
          Welcome to WeatherWise
        </h1>
        <p className="text-sm md:text-base lg:text-lg mt-5 font-bold">
          Stay Ahead of the Weather Curve with Accurate Forecasts and Real-Time
          Updates
        </p>
        <TypeAnimation
          sequence={[
            "Real-time weather updates",
            1000,
            "Hourly weather forecasts",
            1000,
            "Daily weather forecasts",
            1000,
            "Weather details for any location worldwide",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="inline-block text-xl my-6 font-extrabold"
        />

        <Link to={currentUser ? "/weather" : "/login"}>
          <div className="mt-5 text-center border glowing-border rounded-full py-3 px-5 font-semibold hover:scale-125 cursor-pointer transition duration-300 ease-in-out">
            <p className="glowing-button text-xl">Get Started...</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
