import React from "react";
import "./App.css";
import "./Weather.js";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer className="text-center">
          <a href="https://github.com/sweetjosie/react-wheather-project">
            Open Source  
          </a>
          {"   "}Coded by {"   "} 
          <a href="https://stellar-toffee-0a15c6.netlify.app"> Josie Maia </a>
        </footer>
      </div>
    </div>
  );
}
