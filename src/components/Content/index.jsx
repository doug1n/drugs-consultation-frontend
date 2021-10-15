import React, { useContext } from 'react';
import styled from 'styled-components/native';

import screens from '../../screens';
import { AppContext } from '../../AppContext';
import HomeScreen from '../../screens/Home';
import HistoryScreen from '../../screens/History';
import FavoritesScreen from '../../screens/Favorites';
import ProductScreen from '../../screens/Product';

const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

export default function Content({ style }) {
  const { currentPage } = useContext(AppContext);

  return (
    <Container style={style}>
      {currentPage === screens.HOME && <HomeScreen />}
      {currentPage === screens.HISTORY && <HistoryScreen />}
      {currentPage === screens.FAVORITES && <FavoritesScreen />}
      {currentPage === screens.CHANGE_MEDICINE && <ProductScreen />}
    </Container>
  );
}
