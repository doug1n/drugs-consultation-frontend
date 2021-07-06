import React from 'react';
import styled from 'styled-components/native';
import { FontAwesome, Foundation } from '@expo/vector-icons';

import screens from '../../screens';
import BottomNavigationButton from '../BottomNavigationButton';
import BottomNavigationLittleBall from '../BottomNavigationLittleBall';

const Container = styled.View`
  height: 106px;
  padding: 5px;
`;

const MenuContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

export default function BottomNavigation({ style, page, onSetPage }) {
  return (
    <Container style={style}>
      <MenuContainer>
        <BottomNavigationButton
          onPress={() => {
            onSetPage(screens.HOME);
          }}
          label="Início"
          icon={<Foundation name="home" size={38} color="white" />}
        />
        <BottomNavigationButton
          onPress={() => {
            onSetPage(screens.FAVORITES);
          }}
          label="Favoritos"
          icon={<FontAwesome name="star" size={38} color="white" />}
        />
        <BottomNavigationButton
          onPress={() => {
            onSetPage(screens.HISTORY);
          }}
          label="Histórico"
          icon={<FontAwesome name="bookmark" size={38} color="white" />}
        />
      </MenuContainer>
      <BottomNavigationLittleBall page={page} />
    </Container>
  );
}
