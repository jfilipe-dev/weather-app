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
  Section,
  HelperText,
  OpsText,
  InformationText,
  ActionButton,
  ActionButtonText,
  ChangeUnitsContainer,
  ChangeUnitsButton,
  ChangeUnitsButtonText,
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
  const [units, setUnits] = useState('metric');

  useEffect(() => {
    setLoading(true);
    Promise.all(
      cities.map(async (item) => {
        const response = await apiWeather.get('', {
          params: {
            lat: item.location.lat,
            lon: item.location.lng,
            units,
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
  }, [cities, units])

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

      <ChangeUnitsContainer>
        <ChangeUnitsButton onPress={() => setUnits('metric')} isActived={units === 'metric'} enabled={units !== 'metric'}>
          <ChangeUnitsButtonText isActived={units === 'metric'}>Celsius</ChangeUnitsButtonText>
        </ChangeUnitsButton>
        <ChangeUnitsButton onPress={() => setUnits('imperial')} isActived={units === 'imperial'} enabled={units !== 'imperial'}>
          <ChangeUnitsButtonText isActived={units === 'imperial'}>Fahrenheit</ChangeUnitsButtonText>
        </ChangeUnitsButton>
      </ChangeUnitsContainer>


      {loading && (
        <Section>
          <ActivityIndicator size="large" color={colors.light} />
        </Section>
      )}

      {!loading && cities.length > 0 && (
        <FlatList
        ListHeaderComponent={() => <HelperText>Para excluir uma cidade pressione e segure</HelperText>}
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

      {!loading && cities.length === 0 && (
        <Section>
          <OpsText>Ops...</OpsText>
          <InformationText>Parece que você ainda não adicionou uma cidade</InformationText>
          <ActionButton onPress={() => navigation.navigate('AddCity')}>
            <ActionButtonText>Adicionar cidade</ActionButtonText>
          </ActionButton>
        </Section>
      )}


    </Container>
  );
};

export default Home;
