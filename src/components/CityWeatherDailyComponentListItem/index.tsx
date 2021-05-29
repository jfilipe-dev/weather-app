import React, { useMemo } from 'react';
import { View } from 'react-native';
import { format, fromUnixTime, isToday, isTomorrow } from 'date-fns';
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
      }),
      isToday: isToday(newDate),
      isTomorrow: isTomorrow(newDate),
    }
  }, [])

  return (
    <Container>
      <Section>
        <View>
          {date.isToday && <Title>Hoje</Title>}
          {date.isTomorrow && <Title>Amanhã</Title>}
          {!date.isToday && !date.isTomorrow && <Title>{date.day}</Title>}
          <Subtitle>{date.date}</Subtitle>
        </View>
        <View style={{alignItems: 'center'}}>
          <Subtitle>Dia</Subtitle>
          <Temperature>{daily.temp.day.toFixed(0)}º</Temperature>
        </View>
      </Section>

      <Section>
        <View>
          <Weather>{daily.weather[0].description}</Weather>
          <Subtitle>{daily.temp.min.toFixed(0)}º - {daily.temp.max.toFixed(0)}º</Subtitle>
        </View>
        <View style={{alignItems: 'center'}}>
          <Subtitle>Noite</Subtitle>
          <Temperature>{daily.temp.night.toFixed(0)}º</Temperature>
        </View>
      </Section>
    </Container>
  );
}

export default CityWeatherDailyComponentListItem;
