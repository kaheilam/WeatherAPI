import "./Weather.css";
import React from "react";

class Weather extends React.Component{

    render() {
        return(
            <div className="weather">
                <h1>{this.props.cityName}</h1>
                <h2>{this.props.fahrenheit}°</h2>
                <h3>{this.props.weatherType}</h3>
                <h4>H: {this.props.temp_max_f}°  &nbsp; L: {this.props.temp_min_f}° </h4>

                <div className="row1">
                    <div className="feel-box">
                        <h5><i className="ri-temp-hot-line"></i>FEELS LIKE</h5>
                        <p>{this.props.feel_fahrenheit} °</p>
                    </div>

                    <div className="time">
                        <h5><i className="ri-time-line"></i>LOCAL TIME</h5>
                        <p>{this.props.time}</p>
                    </div>

                </div>

                <div className="row2">
                    <div className="wind">
                        <h5><i className="ri-eye-fill"></i>WIND</h5>
                        <p>{this.props.wind} mph</p>
                    </div>
                    <div className="humidity">
                        <h5><i className="ri-contrast-drop-2-line"></i>HUMIDITY</h5>
                        <p>{this.props.humidity} %</p>
                    </div>

                </div>

                <div className="row3">
                    <div className="sunrise">
                        <h5><i className="ri-haze-fill"></i>SUNRISE</h5>
                        <p>{this.props.sunrise} AM</p>
                    </div>
                    <div className="pressure">
                        <h5><i className="ri-dashboard-2-fill"></i>PRESSURE</h5>
                        <p>{this.props.pressure} inHg</p>
                    </div>
                </div>

            </div>

        )
    }
}

export default Weather;