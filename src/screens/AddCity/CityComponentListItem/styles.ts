import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';

import { colors } from '../../../config/styles';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 12px;
  margin: 12px 0;
  background-color: ${colors.lightPrincipal};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CityName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.light};
  margin-bottom: 4px;
`;

export const CountryName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.light};
`;

export const AddCityButton = styled(RectButton)`
  background-color: ${(props) => props?.enabled ? colors.second : colors.background};
  width: 40px;
  height: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Entypo)`
  font-size: 26px;
`;
