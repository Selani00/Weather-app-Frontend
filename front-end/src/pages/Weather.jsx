import React, { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import Header from "../components/Header";
import InputSection from "../components/weatherPage/InputSection";
import CurrentWeather from "../components/weatherPage/CurrentWeather";
import HourlyForecast from "../components/weatherPage/HourlyForecast";
import DailyForecast from "../components/weatherPage/DailyForecast";
import getFormattedWeatherData from "../services/weatherServices";

const Weather = () => {
  
  const [quary, setQuary] = useState({ q: "Kottawa"});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // // Get current location
  // const getCurrentLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setLatitude(position.coords.latitude);
  //       setLongitude(position.coords.longitude);
  //     });
  //   }
  // }
  

  const getWeather = async () => {
    setLoading(true);
    const message = quary.q ? quary.q : "current location";
  
    const data = await getFormattedWeatherData({ ...quary, units }).then(
      (data) => {
        
        setWeather(data);
        setLoading(false);
      }
    );
    
  };

  useEffect(() => {
    //getCurrentLocation();
    getWeather();
  }, [quary, units]);

  return (
    <div>
      <Header />
      <div className="pt-20">
        <InputSection setQuary={setQuary} setUnits={setUnits} />
        <div className="p-8">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-screen">
            <Spinner aria-label="Extra large spinner example" size="xl" />
            <p className="mt-4 text-lg font-semibold">Please wait...</p>
          </div>
          ) : (
            weather && (
              <div className="md:flex flex-row w-full items-start justify-between ">
                {/* Current weather and hourly forecast */}
                <div className="md:w-2/3  w-full md:px-10 ">
                  {/* Current */}
                  <CurrentWeather weather={weather} units={units} />

                  {/* Hourly forecast */}
                  <HourlyForecast data={weather.hourly} />
                </div>

                {/* Daily forecast */}
                <div className="md:w-1/3 w-full">
                  <DailyForecast data={weather.daily} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
