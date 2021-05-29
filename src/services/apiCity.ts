import axios from 'axios';

const apiKey = 'AIzaSyB1aWRTfvEn3R-HSwhViYcSnOXkkxtT6Vw'

const apiCity = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&language=pt-BR`,
});

export default apiCity;
