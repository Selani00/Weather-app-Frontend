import React from "react";
import Header from "../components/Header";
import InputSection from "../components/weatherPage/InputSection";
import CurrentWeather from "../components/weatherPage/CurrentWeather";
import HourlyForecast from "../components/weatherPage/HourlyForecast";
import DailyForecast from "../components/weatherPage/DailyForecast";

const Weather = () => {
  return (
    <div>
      <Header />
      <div className="pt-20">
        <InputSection />
        <div className="p-8">
          {/* Weather Details */}
          <div className="md:flex flex-row w-full items-start justify-between ">
            {/* Current weather and hourly forecast */}
            <div className="md:w-2/3  w-full md:px-5">
              {/* Current */}
              <CurrentWeather />

              {/* Hourly forecast */}
              <HourlyForecast />
            </div>

            {/* Daily forecast */}
            <div className="md:w-1/3 w-full">
              <DailyForecast />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
