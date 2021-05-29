import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';
import { colors } from '../../config/styles';
import apiCity from '../../services/apiCity';
import CityComponentListItem from './CityComponentListItem';

import {Container, SearchContainer, SearchInput, SearchButton, SearchButtonText} from './styles';

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface CityProps {
  address_components: AddressComponent[],
  geometry: {
    location: {
      lat: string;
      lng: string;
    }
  };
  place_id: string;
}

const AddCity: React.FC = () => {
  const [cityName, setCityName] = useState('');
  const [loading, setLoading] = useState(false);

  const [cities, setCities] = useState<CityProps[]>([] as CityProps[]);

  const handleSearchCity = useCallback(async () => {
    setLoading(true);
    try {
      const response = await apiCity.get('', {
        params: {
          address: cityName
        }
      });

      const currentCities: CityProps[] = response.data.results;

      const realCities = currentCities.filter((item: CityProps) => item.address_components.find(item => item.types.includes('administrative_area_level_2')))

      console.log(realCities)

      setCities(realCities);
    } catch (error) {
      console.log(error.response.data)
    } finally {
      setLoading(false);
    }
  }, [cityName]);

  return (
    <Container>
      <Header title="Buscar cidade" />

      <SearchContainer>
        <SearchInput placeholder="Nome da cidade" placeholderTextColor={colors.principal} value={cityName} onChangeText={setCityName} />
        <SearchButton enabled={!!cityName} onPress={handleSearchCity}>
          <SearchButtonText>{loading ? <ActivityIndicator color={colors.light} /> : 'Buscar'}</SearchButtonText>
        </SearchButton>
      </SearchContainer>

      <FlatList
        contentContainerStyle={{paddingHorizontal: 24, paddingBottom: 12, paddingTop: 12}}
        data={cities}
        renderItem={({ item }) => {
          const renderItem: CityProps = item as CityProps;
          return (
            <CityComponentListItem cityProps={renderItem} />
          )
        }}
        keyExtractor={(item) => {
          const renderItem: CityProps = item as CityProps;
          return renderItem.place_id.toString()
        }}
      />
    </Container>
  );
};

export default AddCity;
