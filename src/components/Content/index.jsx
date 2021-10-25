import React, { useContext, useEffect } from 'react';
import styled from 'styled-components/native';

import screens from '../../screens';
import { AppContext } from '../../AppContext';
import HomeScreen from '../../screens/Home';
import HistoryScreen from '../../screens/History';
import FavoritesScreen from '../../screens/Favorites';
import ProductScreen from '../../screens/Product';
import ChooseByAtcScreen from '../../screens/ChooseByAtc';

const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

export default function Content({ style }) {
  const { currentPage, setShowSearchBox, setShowBottomNavigation } =
    useContext(AppContext);

  useEffect(() => {
    if ([screens.HOME, screens.CHOOSE_BY_ATC].includes(currentPage)) {
      setShowSearchBox(true);
    } else {
      setShowSearchBox(false);
    }

    if (currentPage === screens.CHANGE_MEDICINE) {
      setShowBottomNavigation(false);
    } else {
      setShowBottomNavigation(true);
    }
  }, [currentPage]);

  return (
    <Container style={style}>
      {currentPage === screens.HOME && <HomeScreen />}
      {currentPage === screens.CHOOSE_BY_ATC && <ChooseByAtcScreen />}
      {currentPage === screens.HISTORY && <HistoryScreen />}
      {currentPage === screens.FAVORITES && <FavoritesScreen />}
      {currentPage === screens.CHANGE_MEDICINE && <ProductScreen />}
    </Container>
  );
}
