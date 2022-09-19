import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather">
        <form>
          <input type="search" placeholder="City" className="form-input" />
          <input type="submit" value="search" className="btn btn-primary" />
        </form>
        <h1>New York</h1>
        <ul>
          <li>Thursday 10:20</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">cloudy logo 6° C</div>
          <div className="col-6">
            <ul>
              <li>precipitation: </li>
              <li>wind:</li>
              <li>humidity:</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
