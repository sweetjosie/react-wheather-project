import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "./App.js";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` ,
    });
  }

  function search() {
    const apiKey = "22389e50fe25f5e989f8feefb616bbbf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather shadow">
        <form onSubmit={handleSubmit}>
          <div className="row inputBox">
            <div className="col-8 ">
              <input
                type="search"
                placeholder="City"
                className="form-input"
                autoFocus="on"
                onChange={handleCity}
              />
              </div>
            <div className= "col-3">
              <input
                type="submit"
                value="search"
                className="  btn btn-primary w-100"
              />
              </div>
            </div>
          
        </form>
        <WeatherInfo weatherData={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}