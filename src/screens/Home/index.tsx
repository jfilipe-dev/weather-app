import {useNavigation} from '@react-navigation/core';
import React, { useEffect } from 'react';
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

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { cities } = useCities();

  useEffect(() => {
    Promise.all(
      cities.map(async (item) => {
        const response = await apiWether.get('', {
          params: {
            lat: item.location.lat,
            lon: item.location.lng
          }
        })

        return response.data;
      })
    ).then((response) => {
      console.log(response);
    })

    console.log(cities[0].political.city);
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
        data={cities}
        renderItem={({ item }) => {
          const renderItem: any = item as any;
          return (
            <CityWeatherComponentListItem />
          )
        }}
        keyExtractor={(item) => {
          const renderItem: any = item as any;
          return renderItem.id.toString()
        }}
      />
    </Container>
  );
};

export default Home;
