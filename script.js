const apiKey = "3393c0a44d7eb4e00aec76f65d2b8d99";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("City not found or API error.");
    }

    const data = await response.json();

    document.getElementById("weatherCard").classList.remove("hidden");
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("temperature").textContent = `🌡️ Temperature: ${data.main.temp}°C`;
    document.getElementById("description").textContent = `☁️ Weather: ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `💨 Wind: ${data.wind.speed} m/s`;
  } catch (error) {
    alert("❌ Error: " + error.message);
  }
}
