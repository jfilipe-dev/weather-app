import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { useCities } from '../../hooks/Cities';

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

interface CityWeather {
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
  },
  isFavorited: boolean;
}

interface CityWeatherComponentListItemProps {
  //isFavorited: boolean
  cityWeather: CityWeather;
  city: City;
  cityIndex: number;
}

const CityWeatherComponentListItem: React.FC<CityWeatherComponentListItemProps> = ({cityWeather, city, cityIndex}) => {
  const { removeCity } = useCities();
  const navigation = useNavigation();

  return (
    <Container
      activeOpacity={0.4}
      onLongPress={() => removeCity(city.id)}
      onPress={() => navigation.navigate('CityWeather', {
        cityName: city?.political.city,
        dailyWeather: cityWeather.daily,
        cityIndex
      })}
    >
      <Section>
        <View>
          <Title>{city?.political.city}</Title>
          <Subtitle>{city?.political.state} - {city?.political.country}</Subtitle>
        </View>
        <View style={{alignItems: 'center'}}>
          <Subtitle>Agora</Subtitle>
        <Temperature>{cityWeather.current.temp}º</Temperature>
        </View>
      </Section>

      <Section>
        <View>
          <Weather>{cityWeather.current.weather[0].description}</Weather>
          <Subtitle>{cityWeather.daily[0].temp.min}º - {cityWeather.daily[0].temp.max}º</Subtitle>
        </View>
        {city.isFavorited && <Icon name="heart" />}
      </Section>
    </Container>
  );
}

export default CityWeatherComponentListItem;
