async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "3393c0a44d7eb4e00aec76f65d2b8d99"; // API Key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById("weatherCard").classList.remove("hidden");
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = `🌡️ ${data.main.temp}°C`;
    document.getElementById("weatherDesc").innerText = `⛅ ${data.weather[0].main}`;
    document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } else {
    alert("❌ City not found! Please check the spelling.");
  }
}

