import {useNavigation} from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { useCities } from '../../hooks/Cities';

import CityWeatherComponentListItem from '../../components/CityWeatherComponentListItem';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderAddCityButton,
  HeaderAddCityButtonText,
  Icon,
} from './styles';
import apiWether from '../../services/apiWether';

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

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { cities } = useCities();

  const [citiesWether, setCitiesWether] = useState<CityWether[]>([] as CityWether[])

  useEffect(() => {
    Promise.all(
      cities.map(async (item) => {
        const response = await apiWether.get('', {
          params: {
            lat: item.location.lat,
            lon: item.location.lng,
            units: 'metric',
            lang: 'pt_Br'
          }
        })

        return response.data;
      })
    ).then((response) => {
      setCitiesWether(response);
    })
  }, [cities])

  return (
    <Container>
      <Header>
        <HeaderTitle>Cidades</HeaderTitle>
        <HeaderAddCityButton onPress={() => navigation.navigate('AddCity')}>
          <HeaderAddCityButtonText>
            <Icon name="plus" />
          </HeaderAddCityButtonText>
        </HeaderAddCityButton>
      </Header>

      <FlatList
        contentContainerStyle={{padding: 24}}
        data={citiesWether}
        renderItem={({ item, index }) => {
          const renderItem: CityWether = item as CityWether;
          return (
            <CityWeatherComponentListItem city={cities[index]} cityWether={renderItem} />
          )
        }}
        keyExtractor={(_, index) => {
          return index.toString()
        }}
      />
    </Container>
  );
};

export default Home;
