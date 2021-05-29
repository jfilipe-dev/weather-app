import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {colors} from '../../config/styles';

import Entypo from 'react-native-vector-icons/Entypo';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 0 24px;
  height: 68px;
  background: ${colors.principal};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.light};
`;

export const HeaderAddCityButton = styled(RectButton)`
  background-color: ${colors.second};
  width: 40px;
  height: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const HeaderAddCityButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.light};
`;

export const Icon = styled(Entypo)`
  color: ${colors.principal};
  font-size: 26px;
`;

export const Section = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const HelperText = styled.Text`
  text-align: center;
  color: ${colors.light};
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const OpsText = styled.Text`
  text-align: center;
  color: ${colors.light};
  font-weight: bold;
  font-size: 22px;
`;

export const InformationText = styled.Text`
  text-align: center;
  color: ${colors.light};
  font-weight: bold;
  font-size: 24px;
`;

export const ActionButton = styled(RectButton)`
  height: 52px;
  border-radius: 10px;
  width: 100%;
  background-color: ${colors.second};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const ActionButtonText = styled.Text`
  text-align: center;
  color: ${colors.principal};
  font-weight: bold;
  font-size: 18px;
`;
