import React from 'react';
import styled from 'styled-components/native';

import { AppContext, AppProvider } from './AppContext';
import SearchBoxComponent from './components/SearchBox';
import BottomNavigationComponent from './components/BottomNavigation';
import ContentComponent from './components/Content';
import DismissKeyboard from './components/DismissKeyboard';

const Container = styled.View`
  flex: 1;
  background-color: #003cbf;
`;

const SearchBox = styled(SearchBoxComponent)`
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
        {({
          currentPage,
          setCurrentPage,
          showSearchBox,
          showBottomNavigation,
        }) => (
          <>
            <Container>
              {showSearchBox && (
                <SearchBox page={currentPage} onSetPage={setCurrentPage} />
              )}
              <Content />
              {showBottomNavigation && (
                <BottomNavigation
                  page={currentPage}
                  onSetPage={setCurrentPage}
                />
              )}
            </Container>
          </>
        )}
      </AppContext.Consumer>
    </AppProvider>
  );
}
