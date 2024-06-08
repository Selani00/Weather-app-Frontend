import React from "react";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { IoSpeedometerSharp } from "react-icons/io5";
import { BiSolidSun } from "react-icons/bi";

const CurrentWeather = () => {
  return (
    <div className="w-full">
      <div className="py-5 md:py-3 border rounded-lg ">
        <div className="flex-row md:flex items-center justify-between px-5 md:px-10 w-full">
          <div className="md:order-2 flex flex-col items-center pb-2">
            <img
              src="http://openweathermap.org/img/wn/04d.png"
              className="w-40 h-40 object-cover"
            />
            <p className="text-2xl font-bold text-center">Cloudy</p>
          </div>

          <div className="text-center md:order-1">
            <p className="text-2xl font-semibold uppercase">City , LK</p>
            <p className="text-xl font-base">Time</p>
          </div>

          <div className="mt-5 md:mt-10 md:text-start text-center">
            <p className="text-4xl font-bold">25°</p>
            <div className=" gap-3 text-xs mt-3">
              <p className="uppercase">min temp : 25° </p>

              <p className="uppercase">max temp: 25° </p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center gap-5 md:gap-10 text-center text-base font-semibold ">
          <p>feels like</p>
          <div className="flex items-center justify-center gap-1">
            <GiSunrise className="w-6 h-6" />
            <p>3.00AM</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <GiSunset className="w-6 h-6" />
            <p>3.00AM</p>
          </div>
        </div>
      </div>

      <div className="mt-5 shadow-2xl rounded-lg bg-gray-200 border-gray-300  dark:bg-gray-800 dark:border-gray-600 pt-5 pb-2 px-2 md:px-20">
        <div className="flex items-start justify-between ">
          <div>
            <div>
              <div className="flex items-center justify-center gap-2 ">
                <FaWind className="w-6 h-6" />
                <p className="text-sx">Wind Speed</p>
              </div>
              <p className="text-center font-bold text-lg">0.2 Km/h</p>
            </div>
            <div className="my-5">
              <div className="flex items-center justify-center gap-2 ">
                <WiHumidity className="w-7 h-7" />
                <p className="text-sx">Humidity</p>
              </div>
              <p className="text-center font-bold text-lg">0.2 </p>
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-center gap-2 ">
                <IoSpeedometerSharp className="w-6 h-6" />
                <p className="text-sx">Pressure</p>
              </div>
              <p className="text-center font-bold text-lg">0.2 </p>
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-center gap-2 ">
                <BiSolidSun className="w-6 h-6" />
                <p className="text-sx">UV</p>
              </div>
              <p className="text-center font-bold text-lg">0.2 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
