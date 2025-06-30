document.getElementById('button').addEventListener('click', async function () {
    const city = document.getElementById('input').value;
    const apiKey = "e3525fb4fb225e3fe0e8f372e57d4591";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        const weatherText = `
          📍 Location: ${data.name}, ${data.sys.country}<br>
          🌡️ Temp: ${data.main.temp}°C<br>
          ☁️ Condition: ${data.weather[0].description}
        `;
        document.getElementById('weather-display').innerHTML = weatherText;

        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const img = document.getElementById('weather-img');
        img.src = iconUrl;
        img.style.display = 'block';
      } else {
        document.getElementById('weather-display').innerHTML = "❌ City not found.";
        document.getElementById('weather-img').style.display = 'none';
      }
    } catch (error) {
      document.getElementById('weather-display').innerHTML = "⚠️ Error fetching weather.";
      document.getElementById('weather-img').style.display = 'none';
    }
  });