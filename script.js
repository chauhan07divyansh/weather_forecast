function getWeather(){
    const city = document.getElementById("cityInput").value;
    const apiKey = "410d839fced3a38b78792a5648081512"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = "<p>City not found or API error.</p>";
    });
}