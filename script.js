async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("⚠️ Please enter a city name.");
    return;
  }

  try {
    // Step 1: Get WOEID
    const locationRes = await fetch(`https://www.metaweather.com/api/location/search/?query=${city}`);
    const locationData = await locationRes.json();

    if (locationData.length === 0) {
      alert("❌ City not found.");
      return;
    }

    const woeid = locationData[0].woeid;

    // Step 2: Get Weather by WOEID
    const weatherRes = await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
    const weatherData = await weatherRes.json();
    const today = weatherData.consolidated_weather[0];

    // Step 3: Show Results
    document.getElementById("weatherCard").classList.remove("hidden");
    document.getElementById("cityName").textContent = weatherData.title;
    document.getElementById("weatherIcon").src = `https://www.metaweather.com/static/img/weather/png/${today.weather_state_abbr}.png`;
    document.getElementById("temperature").textContent = `🌡️ Temp: ${Math.round(today.the_temp)}°C`;
    document.getElementById("description").textContent = `☁️ State: ${today.weather_state_name}`;
    document.getElementById("humidity").textContent = `💧 Humidity: ${today.humidity}%`;
    document.getElementById("wind").textContent = `💨 Wind: ${Math.round(today.wind_speed)} km/h`;
  } catch (error) {
    alert("❌ Something went wrong: " + error.message);
  }
}
