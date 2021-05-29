import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../../config/styles';

export const Container = styled.View`
  flex: 1;
`;

export const FavoriteButton = styled.TouchableOpacity``;

export const Icon = styled(Entypo)`
  color: ${colors.like};
  font-size: 28px;
`;

export const HelperText = styled.Text`
  text-align: center;
  color: ${colors.light};
  font-weight: bold;
  font-size: 14px;
  margin: 12px 0;
`;
