async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "3393c0a44d7eb4e00aec76f65d2b8d99"; // Replace with your API Key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === 200) {
    const iconCode = data.weather[0].icon;
    document.getElementById("weatherCard").classList.remove("hidden");
    document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById("temperature").innerText = `🌡️ ${data.main.temp}°C`;
    document.getElementById("description").innerText = `⛅ ${data.weather[0].main} - ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;
  } else {
    document.getElementById("weatherCard").classList.add("hidden");
    alert("❌ City not found. Please try again.");
  }
}
