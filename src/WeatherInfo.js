import React from "react";
import FormatedDate from "./DayTimeInfo";
import WeatherTemp from "./WeatherTemp"

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
      <div className="row mt-3">
        <div className="col-6  text-captalize d-flex">
          
          <img src={props.weatherData.iconUrl} alt={props.weatherData.description}/>
         
          <WeatherTemp fTemp = {Math.round(props.weatherData.temperature)}/>
         
         
          
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
