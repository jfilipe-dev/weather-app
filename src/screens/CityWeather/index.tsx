import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from '../../components/Header';

import CityWeatherDailyComponentListItem from '../../components/CityWeatherDailyComponentListItem';

import { Container } from './styles';

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

interface CityWeatherProps {
  route: {
    params: {
      cityName: string;
      dailyWeather: Daily[];
    }
  }
}

const CityWeather: React.FC<CityWeatherProps> = ({route}) => {
  return (
    <Container>
      <Header title={route.params.cityName}>

      </Header>

      <ScrollView contentContainerStyle={{padding: 24}}>
        {route.params.dailyWeather.map((item, index) => (
           index > 0 && <CityWeatherDailyComponentListItem key={index.toString()} daily={item} />
        ))}
      </ScrollView>

    </Container>
  );
}

export default CityWeather;
