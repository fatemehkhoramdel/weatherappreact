import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-9">
          <input type="search" placeholder="Search city"></input>
        </div>
        <div className="col-3">
          <input type="submit" className="btn btn-primary"></input>
        </div>
      </div>
      <h1>
        Sreach for <span className="cityName">Mashhad</span>
      </h1>
      <div className="row">
        <div className="col-9">
          <div className="row">
            <div className="col-6 w-30">
              <img
                class="wob_tci"
                alt="Mostly cloudy"
                src="//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                className="fluid"
              />
              <span className="temp">28</span>
              <span className="unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 2% </li>
                <li>Humidity: 80% </li>
                <li>Wind: 3 km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-3 warp">
          <ul>
            <li className="info">Weather </li>
            <li>Saturday 10:00 pm </li>
            <li>Mostly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
