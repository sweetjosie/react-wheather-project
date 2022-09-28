import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.weatherData.city}</h1>
      <ul>
        <li>
          <FormatedDate date={props.weatherData.date} />
        </li>
        <li className="text-captalize">{props.weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.weatherData.iconUrl} alt="icon"/>
          {" "} {Math.round(props.weatherData.temperature)}° F
        </div>
        <div className="col-6">
          <ul>
            
            <li>Wind:{" "} {Math.round(props.weatherData.wind)}{" "} Km/h</li>
            <li>Humidity:{" "} {props.weatherData.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
