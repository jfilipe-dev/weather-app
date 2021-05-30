import axios from 'axios';

const appId = ''

const apiWeather = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly,alerts&appid=${appId}`,
});

export default apiWeather;
