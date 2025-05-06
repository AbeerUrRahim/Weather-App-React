import React, { useEffect, useState } from 'react'

function Weather() {
  let [data,setdata]=useState({})
    useEffect(()=>{
      let country=""

        let key="0e5bf5a183e2d129eb116250d0a34b9d"
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=0e5bf5a183e2d129eb116250d0a34b9d&units=metric`)
         .then(response=>response.json())
         .then(result=>{
          console.log(result)
           country =result
           setdata({
             name: country.name,
             weather: country.weather[0]?.description
           })
         }
        )
         .catch(err=>{
            console.log("error is "+err)
         })
    },[])
    console.log(data.name)
  return (
 

    <div className="row d-flex justify-content-center py-5">
      <div className="col-md-8 col-lg-6 col-xl-5">

        <div className="card text-body" style={{ borderRadius: '35px' }}>
          <div className="card-body p-4">

            <div className="d-flex">
              <h6 className="flex-grow-1">{data.name}</h6>
              <h6>15:07</h6>
            </div>

            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6 className="display-4 mb-0 font-weight-bold">13°C</h6>
              <span className="small" style={{ color: '#868B94' }}>{data.weather}</span>
            </div>

            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                <div><i className="fas fa-wind fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1">40 km/h</span></div>
                <div><i className="fas fa-tint fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1">84%</span></div>
                <div><i className="fas fa-sun fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1">0.2h</span></div>
              </div>
              <div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                  width="100px"
                  alt="weather"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}


  
  

export default Weather