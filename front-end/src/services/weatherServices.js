const BASE_URL = "https://api.openweathermap.org/data/2.5/";
import { DateTime } from "luxon";

// main function to fecth the current weather
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: import.meta.env.VITE_WEATHER_API_KEY,
  });

  
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
};

// format the icon and data
const iconUrlFromCode = (icon) =>
    `http://openweathermap.org/img/wn/${icon}.png`;
  
  const formatToLocalTime = (
    secs,
    offset,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);


  // format the current data and return
  const formatCurrent = (data) => {
    
    const {
      coord: { lon, lat },
      main: { temp, feels_like, temp_min, temp_max, pressure, humidity},
      name,
      dt,
      sys: { country, sunrise, sunset },
      weather,
      wind: { speed },
      timezone,
    } = data;
  
    const { main: details, icon,description } = weather[0];
  
    const formattedLocalTime = formatToLocalTime(dt, timezone);
    return {
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      name,
      country,
      sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
      sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
      details,
      icon: iconUrlFromCode(icon),
      speed,
      formattedLocalTime,
      description,
      dt,
      timezone,
      lat,lon
    };
  };

  
  // format the forecast data and return
  const formattForecastWeather= (secs, offset, data) =>{
    //hourly forecast
    const hourly= data.filter(f => f.dt > secs).map((f) =>({
        temp: f.main.temp,
        title : formatToLocalTime(f.dt, offset, "hh:mm a"),
        icon: iconUrlFromCode(f.weather[0].icon),
        date : f.dt_txt,
        
    })).slice(0,5);

    

    //daily forecast
    const daily = data.filter((f)=> f.dt_txt.slice(-8) === "00:00:00").map(f=>({
        temp: f.main.temp,
        title : formatToLocalTime(f.dt, offset, "ccc"),
        icon: iconUrlFromCode(f.weather[0].icon),
        date : f.dt_txt,
        humidity: f.main.humidity,
        pressure: f.main.pressure,
        wind: f.wind.speed,
    }))

    return {hourly, daily}

}

// export the functions
const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
      "weather",
      searchParams
    ).then(formatCurrent);
  
    const {dt, lat, lon, timezone}= formattedCurrentWeather;
  
    const formattedForecastWeather = await getWeatherData('forecast', {lat,lon, units: searchParams.units}).then((d) => formattForecastWeather(dt,timezone,d.list))
    
    return { ...formattedCurrentWeather, ...formattedForecastWeather};

  };
  
  export default getFormattedWeatherData;




