import SearchBar from "../SearchBar/SearchBar";
import Weather from "../Weather/Weather";
import weatherAPI from "../util/weatherAPI";
import "./App.css";
import React from "react";


class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
                cityName: "City Name",
        }

        this.search = this.search.bind(this);
        this.handleCelciusTemp = this.handleCelciusTemp.bind(this);
        this.handleFahrenheitTemp = this.handleFahrenheitTemp.bind(this);
    }

    handleCelciusTemp(temp) {
        return Math.round(temp - 273.15);
    }

    handleFahrenheitTemp(temp) {
        return Math.round((temp - 273.15)*1.8+32);
    }


    search(city) {
        weatherAPI.search(city).then(searchResult => {
            this.setState({
                cityName: searchResult.name,
                weatherType: searchResult.weather[0].main,

                // celcius: this.handleCelciusTemp(searchResult.main.temp),
                fahrenheit: this.handleFahrenheitTemp(searchResult.main.temp),
                // feel_celcius: this.handleCelciusTemp(searchResult.main.feels_like),
                feel_fahrenheit: this.handleFahrenheitTemp(searchResult.main.feels_like),

                // temp_min_c: this.handleCelciusTemp(searchResult.main.temp_min),
                // temp_max_c: this.handleCelciusTemp(searchResult.main.temp_max),
                temp_min_f: this.handleFahrenheitTemp(searchResult.main.temp_min),
                temp_max_f: this.handleFahrenheitTemp(searchResult.main.temp_max),

                humidity: searchResult.main.humidity,
                wind: Math.round(searchResult.wind.speed*2.23694),
                sunrise: new Date(searchResult.sys.sunrise*1000).toLocaleTimeString(navigator.language, { hour12: false, hour: '2-digit', minute:'2-digit'}),
                // time: new Date(searchResult.dt*1000).toLocaleTimeString(navigator.language, { hour12: false, hour: '2-digit', minute:'2-digit'}),
                pressure: (searchResult.main.pressure * 0.02953).toFixed(2),
                timezone: searchResult.timezone,


            })
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    onSearch={this.search}
                    cityName={this.state.cityName}
                    // celcius={this.state.celcius}
                    fahrenheit={this.state.fahrenheit}
                    weatherType={this.state.weatherType}
                    weatherIcon={this.state.weatherIcon}
                    // feel_celcius={this.state.feel_celcius}
                    feel_fahrenheit={this.state.feel_fahrenheit}
                    // temp_min_c={this.state.temp_min_c}
                    // temp_max_c={this.state.temp_max_c}
                    temp_min_f={this.state.temp_min_f}
                    temp_max_f={this.state.temp_max_f}
                    humidity={this.state.humidity}
                    wind={this.state.wind}
                    sunrise={this.state.sunrise}
                    // time={this.state.time}
                    pressure={this.state.pressure}
                    timezone={this.state.timezone}
                />

            </div>

        )
    }
}

export default App;
