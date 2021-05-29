import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';

import {Container, BackButton, HeaderTitle, Icon} from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title, children}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" />
      </BackButton>
      <HeaderTitle>{title}</HeaderTitle>

      <View style={{marginLeft: 'auto'}}>
        {children}
      </View>
    </Container>
  );
};

export default Header;
