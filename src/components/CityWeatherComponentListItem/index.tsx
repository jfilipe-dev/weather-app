import React from 'react';
import { View } from 'react-native';

import { Container, Section, Subtitle, Title, Weather, Temperature, Icon } from './styles';

interface Weather {
  description: string;
}

interface Daily {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  },
  weather: Weather[];
}

interface CityWether {
  current: {
    dt: number;
    temp: number;
    weather: Weather[];
  },
  daily: Daily[];
}

interface City {
  location: {
    lat: string;
    lng: string;
  },
  id: string,
  political: {
    city: string;
    state: string;
    country: string;
  }
}

interface CityWeatherComponentListItemProps {
  //isFavorited: boolean
  cityWether: CityWether;
  city: City;
}

const CityWeatherComponentListItem: React.FC<CityWeatherComponentListItemProps> = ({cityWether, city}) => {
  return (
    <Container>
      <Section>
        <View>
          <Title>{city.political.city}</Title>
          <Subtitle>{city.political.state} - {city.political.country}</Subtitle>
        </View>
        <Temperature>{cityWether.current.temp} º</Temperature>
      </Section>

      <Section>
        <View>
          <Weather>{cityWether.current.weather[0].description}</Weather>
          <Subtitle>{cityWether.daily[0].temp.min}º - {cityWether.daily[0].temp.max}º</Subtitle>
        </View>
        {/* {isFavorited && <Icon name="heart" />} */}
      </Section>
    </Container>
  );
}

export default CityWeatherComponentListItem;
