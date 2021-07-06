import React from 'react';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

import { AppContext, AppProvider } from './AppContext';
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
  return (
    <AppProvider>
      <AppContext.Consumer>
        {({ currentPage, setCurrentPage }) => (
          <DismissKeyboard>
            <Container style={{ paddingTop: Constants.statusBarHeight }}>
              <Header page={currentPage} onSetPage={setCurrentPage} />
              <Content page={currentPage} />
              <BottomNavigation page={currentPage} onSetPage={setCurrentPage} />
            </Container>
          </DismissKeyboard>
        )}
      </AppContext.Consumer>
    </AppProvider>
  );
}
