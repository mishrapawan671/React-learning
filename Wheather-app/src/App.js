import { useState } from "react";
import "./styles.css";
import Wheatherinfo from "./WheatherInfo";
import Form from './UI/Form';

var dummy = {
  "message": "accurate",
  "cod": "200",
  "count": 1,
  "list": [
      {
          "id": 1258526,
          "name": "Ranchi",
          "coord": {
              "lat": 23.35,
              "lon": 85.3333
          },
          "main": {
              "temp": 15.06,
              "feels_like": 14.92,
              "temp_min": 15.06,
              "temp_max": 15.06,
              "pressure": 1021,
              "humidity": 88
          },
          "dt": 1640797747,
          "wind": {
              "speed": 0,
              "deg": 0
          },
          "sys": {
              "country": "IN"
          },
          "rain": {
              "1h": 4.02
          },
          "snow": null,
          "clouds": {
              "all": 75
          },
          "weather": [
              {
                  "id": 721,
                  "main": "Haze",
                  "description": "haze",
                  "icon": "50n"
              },
              {
                  "id": 502,
                  "main": "Rain",
                  "description": "heavy intensity rain",
                  "icon": "10n"
              }
          ]
      }
  ]
}

export default function App() {
 
  //const[country,setCountry]=useState('India');
  const [data, setData] = useState(dummy);
  let city="";

  var axios = require("axios").default;

   const cityChange=(event)=>{
      city=event.target.value;
      console.log(city);
   }

    

   function submitHandler(event) {

    event.preventDefault();  
    var options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/find",
      params: {
        q:`${city}`,
        units: 'metric'
      },
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": ""
      }
    };

    axios
      .request(options)
      .then(function (response) {
         setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  return (
    <div className="App">
      <Wheatherinfo wheatherData={data} />
      <form onSubmit={submitHandler}>
        <label>
          <h3>Enter City </h3>
        </label>
        <input type="text" name="city" onChange={cityChange} />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}
