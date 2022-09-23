import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "./App.js";
import formatedDate from "./formatedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: "wednesday 8:27",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather shadow">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="City"
                  className="form-input"
                  autoFocus="on"
                />
                <input
                  type="submit"
                  value="search"
                  className=" col-3 btn btn-primary"
                />
              </div>
            </div>
          </form>
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <formatedDate date={weatherData.date} />
            </li>
            <li className="text-captalize">{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              cloudy logo {Math.round(weatherData.temperature)}° F
            </div>
            <div className="col-6">
              <ul>
                <li>precipitation:{}</li>
                <li>wind:{weatherData.wind}Km/h</li>
                <li>humidity:{}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "22389e50fe25f5e989f8feefb616bbbf";
    let apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial";

    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
