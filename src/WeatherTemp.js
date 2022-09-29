import React, {useState} from "react";

export default function WeatherTemp(props){
    const [unit, setUnit]= useState ("fahrenheit");


 function showFahrenheit (event){
 event.preventDefalt();
 setUnit(fahrenheit);
  }
  
  function showCelsius(event){
    event.preventDefalt();
    setUnit (celsius);
  }

 
 function fahrenheit(){
 return(celsius = (props.fTemp - 32) * 5/9 ) ;
 }
    if (unit === "fahrenheit"){
    return(
        
           <div className="showTemp">
            {Math.round(props.fTemp)}
            <span className= "unit"> 
            °F| 
            <a href="/" onClick={showCelsius} >°C
            </a>   
            </span>
            </div> 
        
    );
}else{ 

   
    return(
         <div className="showTemp">
            {Math.round(celsius())}
            <span className= "unit"> <a href="/" onClick={showFahrenheit}> °F</a> | °C   </span>
            </div> 
    );}
    }
