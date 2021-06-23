import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import HeaderSearch from '../HeaderSearch';

const Container = styled.View`
  height: ${(props) => 206 - props.statusBarHeight}px;
  padding: 15px;
`;

const TitleOptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.Text`
  color: white;
  font-size: 24px;
`;

export default function Header({ statusBarHeight }) {
  return (
    <Container statusBarHeight={statusBarHeight}>
      <TitleOptionsContainer>
        <Text>Medicamentos</Text>
        <Ionicons name="settings" size={24} color="white" />
      </TitleOptionsContainer>
      <HeaderSearch />
    </Container>
  );
}
