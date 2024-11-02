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
      <h1> reach for Mashhad</h1>
      <div className="row">
        <div className="col-9">
          <div className="row">
            <div className="col-4">
              <image href="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"></image>
            </div>
            <div className="col-4">
              <h2>28°C</h2>
            </div>
            <div className="col-4">
              <ul>
                <li>Precipitation: 2% </li>
                <li>Humidity: 80% </li>
                <li>Wind: 3 km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-3">
          <ul>
            <li>Weather </li>
            <li>Saturday 10:00 pm </li>
            <li>Mostly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
