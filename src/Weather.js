import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import weatherApidata from './FetchApi'

function Weather() {

    const [city,setCity]=useState("")
    const [Weather,setweather]=useState({})
    const FetchWeatherData=async()=>{
      if(city===""){
       alert("Please enter city.")
       return;
      }
     
      const getWeather= await weatherApidata(city)
      if(getWeather.cod!==200){
        alert("Please enter correct city name.")
        return;
      }
      const temp=Math.floor(getWeather.main.temp)
      const sunriseTime = new Date(getWeather.sys.sunrise * 1000)
      const formattedSunrise = sunriseTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
      setweather({
        ...getWeather,
        temp,
        formattedSunrise
      })
  console.log(formattedSunrise)
      }
  return (
 

    <div className="row d-flex justify-content-center py-5">
      <div className="col-md-8 col-lg-6 col-xl-5">

        <div className="card text-body" style={{ borderRadius: '35px', background: 'linear-gradient(280deg,#087AFF,rgb(171, 202, 247))'}}>
     
          <div className="card-body p-4" > 
          <div className="input-group  gap-4">
        <input
          type="text"
          className="form-control "style={{ borderRadius: '35px' }}
          placeholder="Enter city name"
          
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn "  type="button" onClick={FetchWeatherData} style={{ borderRadius: '35px', background:'rgb(255, 255, 255)'}} >
          <i className="bi bi-search"></i>
        </button>
      </div>
      {Weather && Weather.weather && Weather.weather.length > 0 ?<>
        <div className="d-flex  mt-5">
              <h6 className="flex-grow-1 text-center   fs-3"style={{ color: 'rgb(255, 255, 255)'}} >{Weather.name}</h6>
            
            </div>

            <div className="d-flex flex-column text-center mt-5 mb-5">
              <h6 className="display-4 mb-1 font-weight-bold" style={{ color: '#F9B009',fontWeight: 400 }}>{Weather.temp}°C</h6>
              <span className="fs-5" style={{ color: 'rgb(255, 255, 255)' }}>{Weather.weather[0].description}</span>
            </div>

            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                <div><i className="fas fa-wind fa-fw" style={{ color: ' white' }}></i> <span className="ms-1">{Weather.wind.speed}</span></div>
                <div><i className="fas fa-tint fa-fw" style={{ color: ' white' }}></i> <span className="ms-1">{Weather.main.humidity}%</span></div>
                <div><i className="fas fa-sun fa-fw" style={{ color: 'rgb(253, 205, 92)' }}></i> <span className="ms-1">{Weather.formattedSunrise}</span></div>
              </div>
              <div>
                <img
                  src= {`https://openweathermap.org/img/wn/${Weather.weather[0]?.icon}@2x.png`}
                  width="100px"
                  alt="weather"
                />
              </div>
            </div>
      </>:<>
      <p className="d-flex mt-4 justify-content-center" style={{ color: 'rgb(236, 236, 236)' }}>no data to display</p>
      </>}


          </div>
        </div>

      </div>
    </div>
  );
}


  
  

export default Weather