const weatherApidata = async (city) => {
    try {
        let key="0e5bf5a183e2d129eb116250d0a34b9d"
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
      const result = await response.json();
      console.log(result);
      return result; 
    } catch (err) {
      console.log("Error:", err);
      return null;
    }
  };
  export default weatherApidata;