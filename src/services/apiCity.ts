import axios from 'axios';

const apiKey = ''

const apiCity = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&language=pt-BR`,
});

export default apiCity;
