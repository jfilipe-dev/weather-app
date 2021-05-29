import axios from 'axios';

const appId = '77e4bf37d415a245963a33dd7aa7930a'

const apiWether = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly,alerts&appid=${appId}`,
});

export default apiWether;

//lat=-16.3720037&lon=-39.5824855
