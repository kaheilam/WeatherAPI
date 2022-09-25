import apiKeys from "../config";

let key = apiKeys;

const weatherAPI = {
    search(city) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
            .then(response => {
                if(response.ok) {
                    // console.log(response.json());
                    return response.json();
                    // return response.json();
                }
            });

    }
}

export default weatherAPI;