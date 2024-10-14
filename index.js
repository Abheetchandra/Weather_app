// const apiKey = "581d98e403a74d8fb0d172608242909";
// const apiUrl ="http://api.weatherapi.com/v1/current.json?q=${Patna}";

// async function checkWeather(){
//     const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     var data = await response.json();

//     console.log(data);
    
// }
// checkWeather();

let form=document.getElementById("weatherForm")

form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const city = document.getElementById("cityInput").value;
        const url = `http://api.weatherapi.com/v1/current.json?key=581d98e403a74d8fb0d172608242909&q=${city}`;
  
    fetchWeatherData(url);
  });
  
  async function fetchWeatherData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      displayWeatherCard(data);
       } catch (error) {
      console.log("Error, please enter valid city name");
      document.getElementById("weatherCardContainer").innerHTML = ""; 
    }
  }
  
  function displayWeatherCard(data) {
    const weatherCardContainer = document.getElementById("weatherCardContainer");
    weatherCardContainer.innerHTML = `
      <div class="weather-card">
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather icon" />
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind: ${data.current.wind_kph} kph</p>
      </div>
    `;
  }