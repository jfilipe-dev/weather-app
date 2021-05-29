import React from 'react';
import { View } from 'react-native';

import { Container, Section, Subtitle, Title, Weather, Temperature, Icon } from './styles';

// import { Container } from './styles';

interface CityWeatherComponentListItemProps {
  //isFavorited: boolean
}

const CityWeatherComponentListItem: React.FC<CityWeatherComponentListItemProps> = ({}) => {
  return (
    <Container>
      <Section>
        <View>
          <Title>Eunápolis</Title>
          <Subtitle>Bahia - Brazil</Subtitle>
        </View>
        <Temperature>25 º</Temperature>
      </Section>

      <Section>
        <View>
          <Weather>Chuva fraca</Weather>
          <Subtitle>25 º - 27º</Subtitle>
        </View>
        {/* {isFavorited && <Icon name="heart" />} */}
      </Section>
    </Container>
  );
}

export default CityWeatherComponentListItem;
