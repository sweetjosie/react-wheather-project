import React from "react";
import formatedDate from "./formatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.weatherData.city}</h1>
      <ul>
        <li>
          <formatedDate date={props.weatherData.date} />
        </li>
        <li className="text-captalize">{props.weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          cloudy logo {Math.round(props.weatherData.temperature)}° F
        </div>
        <div className="col-6">
          <ul>
            <li>precipitation:{}</li>
            <li>wind:{props.weatherData.wind}Km/h</li>
            <li>humidity:{}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
