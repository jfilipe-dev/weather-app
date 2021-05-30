# Weather App
#### Weather Forecast App.

### 📺 <a href="https://www.figma.com/file/GGNXXLDnqzsJ4yIFNYDaCD/Weather-app?node-id=0%3A1">Figma project</a>

### 👨🏻‍💻 Stack and extensions
- React native with typescript
- Axios
- React navigation
- Styled components
- React native async storage
- React native vector icons
- Date fns

### 💻 Features
- Search cities and add them
- List cities added with the current weather forecast
- List the weather forecast for the next 7 days for a specific registered and selected city
- Remove a previously added city
- Mark and unmark a city added as a favorite
- Changing between the celsius and Fahrenheit temperature units


### 💾 How to install
1. Clone this repository - 
`https://github.com/jfilipe-dev/weather-app.git`

2. Install the dependencies - 
`yarn`

3. Configure your google api key 

   in `src/services/apiCity.ts`
   put your API key in apiKey const inside the quotes.

   ```javascript
   import axios from 'axios';

   const apiKey = ''

   const apiCity = axios.create({
        baseURL: `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&language=pt-BR`,
   });

   export default apiCity;
   ```

4. Configure your open weather map app id 

   in `src/services/apiWeather.ts`
   put your app id in appId const inside the quotes.

   ```javascript
   import axios from 'axios';

   const appId = ''

   const apiWeather = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly,alerts&appid=${appId}`,
   });

   export default apiWeather;
   ```

5. Run aplication

   5.1 android - 
`adb reverse tcp:8081 tcp:8081`
`yarn android`

   5.2. ios - 
`cd ios`
`pod install`
`cd ..`
`yarn ios`
