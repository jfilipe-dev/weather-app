import styled from 'styled-components/native';

import Entypo from 'react-native-vector-icons/Entypo';

import { colors } from '../../config/styles';

export const Container = styled.View`
  padding: 6px 12px;
  margin: 12px 0;
  background-color: ${colors.lightPrincipal};
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.light};
  margin-bottom: 4px;
  text-transform: capitalize;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 6px 0;
`;

export const Temperature = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.second};
`;

export const Weather = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.second};
  text-transform: capitalize;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.light};
`;

export const Icon = styled(Entypo)`
  color: ${colors.like};
  font-size: 42px;
`;
