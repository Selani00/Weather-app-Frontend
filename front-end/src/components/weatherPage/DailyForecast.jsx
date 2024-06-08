import React from "react";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { IoSpeedometerSharp } from "react-icons/io5";

const DailyForecast = () => {
  const data = [
    {
      date: "12:00 PM",
      icon: "https://www.weatherbit.io/static/img/icons/c02d.png",
      temp: 25,
      wind: "0.2 km/h",
      humidity: 50,
      pressure: 1500,
    },
    {
      date: "12:00 PM",
      icon: "https://www.weatherbit.io/static/img/icons/c02d.png",
      temp: 25,
      wind: "0.2 km/h",
      humidity: 50,
      pressure: 1500,
    },
    {
      date: "12:00 PM",
      icon: "https://www.weatherbit.io/static/img/icons/c02d.png",
      temp: 25,
      wind: "0.2 km/h",
      humidity: 50,
      pressure: 1500,
    },
    {
      date: "12:00 PM",
      icon: "https://www.weatherbit.io/static/img/icons/c02d.png",
      temp: 25,
      wind: "0.2 km/h",
      humidity: 50,
      pressure: 1500,
    },
    {
      date: "12:00 PM",
      icon: "https://www.weatherbit.io/static/img/icons/c02d.png",
      temp: 25,
      wind: "0.2 km/h",
      humidity: 50,
      pressure: 1500,
    },
  ];
  return (
    <div className="shadow-2xl rounded-lg bg-gray-200 border-gray-300  dark:bg-gray-800 dark:border-gray-600 ">
      <div className="p-5">
        <h1 className="text-start font-bold text-xl">Daily Forcast</h1>
        <div className="mt-4 p-1">
          {data.map((item, index) => (
            <>
              <div key={index} className=" p-3  min-w-max">
                <div className="flex flex-row items-center justify-between gap-2">
                  <p className="font-semibold">{item.date}</p>
                  <img src={item.icon} alt="icon" className="w-10 h-10" />
                  <p className="font-bold text-xl">{item.temp}°</p>
                </div>

                <div className="flex flex-row items-center justify-between gap-2 text-xs mt-4 font-semibold">
                  <div className="flex items-center justify-center gap-2">
                    <FaWind className="w-4 h-4" />
                    <p className="font-semibold">{item.wind}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <WiHumidity className="w-6 h-6" />
                    <p className="font-semibold">{item.pressure}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <IoSpeedometerSharp className="w-4 h-4" />
                    <p className="font-semibold">{item.humidity}</p>
                  </div>
                  
                  
                </div>
              </div>
              <hr className="border-t-2 border-gray-500 w-full" />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
