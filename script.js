const input = document.getElementById("search");
    const button = document.getElementById("searchBtn");
    const result = document.getElementById("result");

    input.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        button.click();
      }
    });

    button.addEventListener("click", async function () {
      const city = input.value.trim();
      
      result.innerHTML = "";
      result.classList.add("empty");
      
      if (city.length === 0) {
        alert("⚠️ You must enter a city name!");
        return;
      }

      try {
        result.classList.remove("empty");
        result.innerHTML = `<h2>Loading...</h2>`;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=af77c9812b2dadea74adc07faea8013d`,
          { method: 'GET' }
        ).catch(() => null);

        if (!response || !response.ok) {
          alert("⚠️ Weather data is incomplete!");
          result.classList.add("empty");
          input.value = "";
          return;
        }

        const data = await response.json();

        const temperature = data?.main?.temp;
        const description = data?.weather?.[0]?.description;
        const cityName = data?.name;

        if (temperature === undefined || !description) {
          alert("Weather data is incomplete!");
          result.classList.add("empty");
          input.value = "";
          return;
        }

        result.innerHTML = `
          <h1>⚲ ${cityName || city}</h1>
          <h2>🌡 Temperature: ${Math.round(temperature)}°C</h2>
          <h3>🌥 Description: ${description}</h3>
        `;

      } catch (error) {
        result.classList.add("empty");
      } finally {
        input.value = "";
      }
    });