import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { colors } from '../../../config/styles';

import { useCities } from '../../../hooks/Cities';

import { Container, CityName, CountryName, AddCityButton, Icon } from './styles';

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

interface CityComponentListItemProps {
  cityProps: CityProps;
}

// country = pais
// administrative_area_level_1 = estado
// administrative_area_level_2 = cidade

const CityComponentListItem: React.FC<CityComponentListItemProps> = ({cityProps}) => {
  const {addCity, cities} = useCities();

  const political = useMemo(() => {
     const city = cityProps.address_components.find(item => item.types.includes('administrative_area_level_2'));
     const state = cityProps.address_components.find(item => item.types.includes('administrative_area_level_1'));
     const country = cityProps.address_components.find(item => item.types.includes('country'));

     return {
       city: city?.long_name,
       state: state?.long_name,
       country: country?.long_name
     }

  }, [])

  const handleAddCity = useCallback(async () => {
    const newCity = {
      location: cityProps.geometry.location,
      id: cityProps.place_id,
      political,
      isFavorited: false,
    }

    await addCity(newCity as any);
  }, [political])

  const isCityAdded = useMemo(() => {
    return !!cities.find(item => item.id === cityProps.place_id);
  }, [cities])

  return (
    <Container>
      <View>
        <CityName>{political.city}</CityName>
        <CountryName>{political.state} - {political.country}</CountryName>
      </View>
      <AddCityButton onPress={handleAddCity} enabled={!isCityAdded}>
        <Icon name={isCityAdded ? 'check' : 'plus'} color={isCityAdded ? colors.light : colors.principal} />
      </AddCityButton>
    </Container>
  );
}

export default CityComponentListItem;
