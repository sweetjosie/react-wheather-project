import React, { useState } from "react";

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState("fahrenheit");

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }


    function celsius() {
        let celsiusTemp = (props.fTemp - 32) * 5 / 9
        return celsiusTemp
    }
    if (unit === "fahrenheit") {
        return (

            <div className="showTemp">
                {Math.round(props.fTemp)}
                <span className="unit">
                    °F|
                    <a href="/" onClick={showCelsius} >°C
                    </a>
                </span>
            </div>

        );
    } else {


        return (
            <div className="showTemp">
                {Math.round(celsius())}
                <span className="unit">
                    <a href="/" onClick={showFahrenheit}> °F</a>
                    | °C
                </span>
            </div>
        );
    }
}
