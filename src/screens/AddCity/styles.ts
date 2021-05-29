import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import { colors } from '../../config/styles';

export const windowWidth = Dimensions.get('window').width;

const realWindowWidth = windowWidth - 48;

export const Container = styled.View`
  flex: 1
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.lightPrincipal};
`;

export const SearchInput = styled.TextInput`
  height: 52px;
  border-radius: 10px;
  width: ${(realWindowWidth/3) * 2 - 12}px;
  margin-right: 12px;
  padding: 0 12px;
  background-color: ${colors.lightPrincipal};
  color: ${colors.light};
  font-weight: bold;
`;

export const SearchButton = styled(RectButton)`
  height: 52px;
  border-radius: 10px;
  width: ${(realWindowWidth/3) * 1 - 12}px;
  margin-left: 12px;
  background-color: ${colors.principal};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.light};
`
