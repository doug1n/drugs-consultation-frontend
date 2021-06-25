import React, { useState } from 'react';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { NativeRouter } from 'react-router-native';

import HeaderComponent from './components/Header';
import BottomNavigationComponent from './components/BottomNavigation';
import ContentComponent from './components/Content';
import DismissKeyboard from './components/DismissKeyboard';

const Container = styled.View`
  flex: 1;
  background-color: #003cbf;
`;

const Header = styled(HeaderComponent)`
  z-index: 2;
`;

const BottomNavigation = styled(BottomNavigationComponent)`
  z-index: 2;
`;

const Content = styled(ContentComponent)`
  z-index: 1;
`;

export default function Main() {
  const [page, setPage] = useState(0);

  const handleSetPage = (newPage) => {
    setPage(newPage);
  };

  return (
    <NativeRouter>
      <DismissKeyboard>
        <Container style={{ paddingTop: Constants.statusBarHeight }}>
          <Header statusBarHeight={Constants.statusBarHeight} />
          <Content page={page} />
          <BottomNavigation page={page} onSetPage={handleSetPage} />
        </Container>
      </DismissKeyboard>
    </NativeRouter>
  );
}
