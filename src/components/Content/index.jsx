import React from 'react';
import styled from 'styled-components/native';
import { Route } from 'react-router-native';

import HomeScreen from '../../screens/Home';
import HistoryScreen from '../../screens/History';
import FavoritesScreen from '../../screens/Favorites';

const Container = styled.View`
  background-color: #fff;
  flex: 1;
  z-index: 100;
`;

export default function Content() {
  return (
    <Container>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/history" component={HistoryScreen} />
      <Route path="/favorites" component={FavoritesScreen} />
    </Container>
  );
}
