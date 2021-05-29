import {useNavigation} from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

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
import apiWeather from '../../services/apiWeather';
import { colors } from '../../config/styles';

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

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { cities } = useCities();

  const [loading, setLoading] = useState(false);
  const [citiesWeather, setCitiesWeather] = useState<CityWeather[]>([] as CityWeather[]);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      cities.map(async (item) => {
        const response = await apiWeather.get('', {
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
      setCitiesWeather(response);
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      setLoading(false);
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

      {loading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={colors.light} />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{padding: 24}}
          data={citiesWeather}
          renderItem={({ item, index }) => {
            const renderItem: CityWeather = item as CityWeather;
            return (
              <CityWeatherComponentListItem city={cities[index]} cityWeather={renderItem} cityIndex={index} />
            )
          }}
          keyExtractor={(_, index) => {
            return index.toString()
          }}
        />
      )}


    </Container>
  );
};

export default Home;
