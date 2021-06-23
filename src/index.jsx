import React, { useState } from 'react';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { NativeRouter } from 'react-router-native';

import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import Content from './components/Content';

const Container = styled.View`
  flex: 1;
  background-color: #003cbf;
`;

export default function Main() {
  const [page, setPage] = useState(0);

  const handleSetPage = (newPage) => {
    setPage(newPage);
  };

  return (
    <NativeRouter>
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
        <Header statusBarHeight={Constants.statusBarHeight} />
        <Content page={page} />
        <BottomNavigation page={page} onSetPage={handleSetPage} />
      </Container>
    </NativeRouter>
  );
}
