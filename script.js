async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "3393c0a44d7eb4e00aec76f65d2b8d99";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>⛅ Weather: ${data.weather[0].main}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
    `;
  } else {
    document.getElementById("weatherResult").innerHTML = `<p>❌ City not found! Check spelling.</p>`;
  }
}
