export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: Math.round(data.main.temp) };
  result.type = getWeatherType(result.temp.F);
  // Map OpenWeather 'main' values to our condition keywords
  const rawCondition = data.weather[0].main.toLowerCase();
  let mappedCondition = "clear";
  switch (rawCondition) {
    case "clear":
      mappedCondition = "clear";
      break;
    case "clouds":
      mappedCondition = "cloudy";
      break;
    case "rain":
    case "drizzle":
      mappedCondition = "rainy";
      break;
    case "snow":
      mappedCondition = "snowy";
      break;
    case "thunderstorm":
      mappedCondition = "stormy";
      break;
    case "mist":
    case "fog":
    case "haze":
      mappedCondition = "foggy";
      break;
    default:
      mappedCondition = rawCondition;
  }
  result.condition = mappedCondition;
  result.isDay = isDay(data.sys, Date.now());
  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};

const getWeatherType = (temperature) => {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66 && temperature <= 85) {
    return "warm";
  } else if (temperature <= 65) {
    return "cold";
  }
};
