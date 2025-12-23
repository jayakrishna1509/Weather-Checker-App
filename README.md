# 🛠 Task: Weather Checker App

This task will cover the following concepts:
- ✅Optional Chaining (?.) – Safely access nested properties of API data
- ✅Error Handling (try...catch) – Catch and display API or logic errors
- ✅Types of Errors – Handle ReferenceError, SyntaxError, TypeError, and API/network-related errors
- ✅API Calls & HTTP Methods – Use fetch() with the GET method to retrieve data from a public API

## 🎯 Objective:

Build a simple Weather Checker web app. The user enters a city name, clicks a button, and the app fetches current weather data using a public API. Use optional chaining to safely extract nested weather values. Wrap API logic in try...catch to handle runtime and network errors. Display user-friendly error messages for invalid input or bad requests. Discuss or simulate types of errors as part of your console logs or examples.


## 🌐 OpenWeatherMap API:

You can use the OpenWeatherMap API for fetching weather data:  
```
https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={YOUR_API_KEY}&units=metric
```

## 🖥️ Sample Output:

**When valid input:**  
```
🌡 Temperature: 23°C  
🌥 Description: light rain  
```

**❌ When error (empty city):**  
```
⚠️ You must enter a city name!  
```

**❌ When data incomplete (simulated):**  
```
⚠️ Weather data is incomplete!
```