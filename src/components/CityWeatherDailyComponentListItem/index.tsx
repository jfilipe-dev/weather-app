import React, { useMemo } from 'react';
import { View } from 'react-native';
import { format, fromUnixTime } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, Section, Title, Subtitle, Temperature, Weather, Icon } from './styles';

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

interface CityWeatherDailyComponentListItemProps {
  daily: Daily;
}

const CityWeatherDailyComponentListItem: React.FC<CityWeatherDailyComponentListItemProps> = ({daily}) => {

  const date = useMemo(() => {
    const newDate = fromUnixTime(daily.dt);

    return {
      day: format(newDate, 'EEEE',{
        locale: pt
      }),
      date: format(newDate, "dd 'de' MMMM",{
        locale: pt
      })
    }
  }, [])

  return (
    <Container>
      <Section>
        <View>
          <Title>{date.day}</Title>
          <Subtitle>{date.date}</Subtitle>
        </View>
        <View style={{alignItems: 'center'}}>
          <Subtitle>Dia</Subtitle>
          <Temperature>{daily.temp.day}º</Temperature>
        </View>
      </Section>

      <Section>
        <View>
          <Weather>{daily.weather[0].description}</Weather>
          <Subtitle>{daily.temp.min}º - {daily.temp.max}º</Subtitle>
        </View>
        <View style={{alignItems: 'center'}}>
          <Subtitle>Noite</Subtitle>
          <Temperature>{daily.temp.night}º</Temperature>
        </View>
      </Section>
    </Container>
  );
}

export default CityWeatherDailyComponentListItem;
