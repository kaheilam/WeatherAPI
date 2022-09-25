import "./SearchBar.css";
import React from "react";
import Weather from "../Weather/Weather";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: '',
            // isFahrenheit: 'false',
            // icon: "ri-fahrenheit-line"
        }
        this.search = this.search.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        // this.changeF_or_C = this.changeF_or_C.bind(this);
    }

    // Search city Name
    search() {
        this.props.onSearch(this.state.city);
    }

    // Handle user input city name
    handleCityChange(event) {
        this.setState({
            city: event.target.value,
        })
    }


    tz = this.props.timezone;
    // obtain date/time from city being fetched
    localTime(timezone) {
        let d = new Date();
        let localTime = d.getTime();
        let localOffset = d.getTimezoneOffset() * 60000;
        let utc = localTime + localOffset;
        let res = utc + (1000 * timezone);
        return new Date(res).toLocaleTimeString(navigator.language, { hour12: false, hour: '2-digit', minute:'2-digit'});
    }

    hour = parseInt(this.localTime(this.tz).substring(0,2));

    daytime(){
        return (this.hour >= 5 && this.hour <= 17);
    }

    // Change background Image based on weather Type and Time
    backgroundImg() {
        switch(this.props.weatherType) {
            case "Clear":
                if(this.daytime()==true)
                {
                    return <img src={require("../Weather/img/day-clear.png")} alt="day-clear"/>;
                } else {
                    return <img src={require("../Weather/img/day-clear.png")} alt="day-clear"/>;
                }
            case "Clouds":
                if(this.daytime()==true)
                {
                    return <img src={require("../Weather/img/day-cloud.png")} alt="day-cloud"/>;
                } else {
                    return <img src={require("../Weather/img/day-cloud.png")} alt="day-cloud"/>;
                }
            case "Snow":
                if(this.daytime()==true)
                {
                    return <img src={require("../Weather/img/day-snow.png")} alt="day-snow"/>;
                } else {
                    return <img src={require("../Weather/img/day-snow.png")} alt="day-snow"/>;
                }
            case "Rain":
                if(this.daytime()==true)
                {
                    return <img src={require("../Weather/img/day-rain.png")} alt="day-rain"/>;
                } else {
                    return <img src={require("../Weather/img/day-rain.png")} alt="day-rain"/>;
                }

            // default: return <img src={require("../Weather/img/day-clear.png")} alt="day-clear"/>;
        }
    }


    // // Change button to display Fahrenheit or Celcius
    // changeF_or_C(click) {
    //     if (this.state.isFahrenheit === "false") {
    //         console.log("now is true");
    //         this.setState({
    //             isFahrenheit: "true",
    //             icon: "ri-celsius-line"
    //         })
    //     } else {
    //         console.log("now is false");
    //         this.setState({
    //             isFahrenheit: "false",
    //             icon: "ri-fahrenheit-line"
    //         })
    //     }
    // }


    render() {
        return (
            <div>
                <div className="navBar">
                    <input onChange={this.handleCityChange} placeholder="Search City Name"/>
                    <button onClick={this.search} className="search"><i className="ri-search-line"></i></button>

                    {/*<button className="change-F" onClick={this.changeF_or_C}><i className={this.state.icon}></i></button>*/}
                </div>


                <div className="box">
                    {this.backgroundImg()}
                    <div>
                        <Weather
                            cityName={this.props.cityName}
                            // celcius={this.props.celcius}
                            fahrenheit={this.props.fahrenheit}
                            weatherType={this.props.weatherType}
                            // feel_celcius={this.props.feel_celcius}
                            feel_fahrenheit={this.props.feel_fahrenheit}
                            // temp_min_c={this.props.temp_min_c}
                            // temp_max_c={this.props.temp_max_c}
                            temp_min_f={this.props.temp_min_f}
                            temp_max_f={this.props.temp_max_f}
                            humidity={this.props.humidity}
                            wind={this.props.wind}
                            sunrise={this.props.sunrise}
                            time={this.localTime(this.props.timezone)}
                            pressure={this.props.pressure}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;