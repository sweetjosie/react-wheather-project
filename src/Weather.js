import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const apiKey = "2f7186f46a8461ec8b967033c17abe5b";

  return (
    <div className="container">
      <div className="weather shadow">
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
      <footer>
        {" "}
        <a href="https://github.com/sweetjosie/react-wheather-project">
          open source
        </a>{" "}
        coded by Josie Maia
      </footer>
    </div>
  );
}
