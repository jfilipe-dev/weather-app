import axios from 'axios';

const apiKey = 'AIzaSyB0zdlYckT8uv2IM4oqnKNVKqAH_oP3_Vg'

const apiCity = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&language=pt-BR`,
});

export default apiCity;
