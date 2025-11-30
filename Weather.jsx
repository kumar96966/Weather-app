import React, { useEffect, useState } from 'react'
import './Weather.css'
import search_icons from '../assets/search.png'
import clear_icons from '../assets/clear.png'
import cloud_icons from '../assets/cloud.png'
import drizzle_icons from '../assets/drizzle.png'
import rain_icons from '../assets/rain.png'
import snow_icons from '../assets/snow.png'
import wind_icons from '../assets/wind.png'
import humidity_icons from '../assets/humidity.png'

const Weather = () => {

    const [weatherData, setWeatherData] = useState();
    const [locationName,setLocation]=useState("")

    const allIcons = {
        "0ld": clear_icons,
        "01n": clear_icons,
        "02d": cloud_icons,
        "02d": cloud_icons,
        "03d": cloud_icons,
        "03n": cloud_icons,
        "04d": drizzle_icons,
        "04n": drizzle_icons,
        "09d": rain_icons,
        "09n": rain_icons,
        "10d": rain_icons,
        "10n": rain_icons,
        "13d": snow_icons,
        "13n": snow_icons,
}


const search = async (city)=>{
        try {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=794949fa20ff199a6d87260af81967bc`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            console.log("humidity",data?.main?.humidity)
            console.log("windspeed",data?.wind?.speed);
            console.log("tempareature",data?.main?.temp );
            
            
            const icon = allIcons[data.weather[0].icon] || clear_icons;
            setWeatherData(data)

        } catch (error) {

        }
        

    }


    // useEffect(()=>{
    //     search("London");
    // },[])

console.log("weatherTem",weatherData);

console.log("location name",locationName);

  return (
    <div className='Weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Search' onChange={(e)=>{console.log("vqlue",e.target?.value);
            setLocation(e.target.value)
            }}/>
            <img src={search_icons} alt='' onClick={()=>{console.log("button click",locationName);
            search(locationName)
            }}/>

        </div>
        <img src={cloud_icons}  alt=''className='weather-icon'/>
         

        <p className='temperature'>{weatherData?.main?.temp} °C</p>
        <p className='location'>{weatherData?.location}</p>
        <div className='weather-data'>
            <div className="col">
                <img src={humidity_icons} alt=''/>
                <div>
                    <p> {weatherData?.main.humidity}  %</p>
                    <span>Humidity</span>


                </div>

            </div>

             <div className="col">
                <img src={wind_icons} alt=''/>
                <div>
                    <p> {weatherData?.wind.speed}km/h </p>
                    <span>Wind Speed</span>


                </div>

            </div>

            
            
        </div>





        
    </div>
  )
}

export default Weather
