import React from 'react';
import styled from 'styled-components/native';
import { FontAwesome, Foundation } from '@expo/vector-icons';
import { useHistory } from 'react-router-native';

import BottomNavigationButton from '../BottomNavigationButton';
import BottomNavigationLittleBall from '../BottomNavigationLittleBall';

const Container = styled.View`
  height: 106px;
  padding: 5px;
  z-index: 200;
`;

const MenuContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

export default function BottomNavigation({ page, onSetPage }) {
  const history = useHistory();

  return (
    <Container>
      <MenuContainer>
        <BottomNavigationButton
          onPress={() => {
            onSetPage(0);
            history.push('/');
          }}
          label="Início"
          icon={<Foundation name="home" size={38} color="white" />}
        />
        <BottomNavigationButton
          onPress={() => {
            onSetPage(1);
            history.push('/favorites');
          }}
          label="Favoritos"
          icon={<FontAwesome name="star" size={38} color="white" />}
        />
        <BottomNavigationButton
          onPress={() => {
            onSetPage(2);
            history.push('/history');
          }}
          label="Histórico"
          icon={<FontAwesome name="bookmark" size={38} color="white" />}
        />
      </MenuContainer>
      <BottomNavigationLittleBall page={page} />
    </Container>
  );
}
