import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import Header from '../../components/Header';

import { useCities } from '../../hooks/Cities';

import CityWeatherDailyComponentListItem from '../../components/CityWeatherDailyComponentListItem';

import { Container, FavoriteButton, Icon } from './styles';

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
      cityIndex: number;
    }
  }
}

const CityWeather: React.FC<CityWeatherProps> = ({route}) => {
  const { favoriteCity, cities } = useCities();

  return (
    <Container>
      <Header title={route.params.cityName}>
        <FavoriteButton onPress={() => favoriteCity(route.params.cityIndex)}>
          <Icon name={cities[route.params.cityIndex].isFavorited ? 'heart' : 'heart-outlined'} />
        </FavoriteButton>
      </Header>

      <FlatList
          contentContainerStyle={{paddingHorizontal: 24, paddingVertical: 12}}
          data={route.params.dailyWeather}
          renderItem={({ item, index }) => {
            const renderItem: Daily = item as Daily;
            return (
              <CityWeatherDailyComponentListItem key={index.toString()} daily={renderItem} />
            )
          }}
          keyExtractor={(_, index) => {
            return index.toString()
          }}
        />
    </Container>
  );
}

export default CityWeather;
