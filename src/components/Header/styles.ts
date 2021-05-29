import styled from 'styled-components/native';

import {colors} from '../../config/styles';

import Entypo from 'react-native-vector-icons/Entypo';

export const Container = styled.View`
  padding: 0 24px;
  height: 68px;
  background: ${colors.principal};
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.light};
  text-transform: capitalize;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 24px;
`;

export const Icon = styled(Entypo)`
  color: ${colors.second};
  font-size: 26px;
`;
