import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Animated } from 'react-native';

import screens from '../../screens';
import HeaderSearchByDrugNameComponent from '../HeaderSearchByDrugName';
import HeaderSearchByAtcComponent from '../HeaderSearchByAtc';

const DEFAULT_HEIGHT = 206.5;
const HEIGHT_WITH_ACTIVE_SEARCH_BY_ATC = 226.5;

const Container = styled(Animated.View)`
  padding: 0px 15px;
`;

const HeaderSearchByDrugName = styled(HeaderSearchByDrugNameComponent)`
  z-index: 2;
`;

const HeaderSearchByAtc = styled(HeaderSearchByAtcComponent)`
  z-index: 1;
`;

export default function SearchBox({ style, page, onSetPage }) {
  const heightAnim = useRef(
    new Animated.Value(DEFAULT_HEIGHT - Constants.statusBarHeight)
  ).current;

  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [activeSearchByAtc, setActiveSearchByAtc] = useState(false);

  const handleActivateSearchByAtc = () => {
    setActiveSearchByAtc(true);
    setHeight(HEIGHT_WITH_ACTIVE_SEARCH_BY_ATC);
    onSetPage(screens.CHOOSE_BY_ATC);
  };

  const handleDisableSearchByAtc = () => {
    setActiveSearchByAtc(false);
    setHeight(DEFAULT_HEIGHT);
    onSetPage(screens.HOME);
  };

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: height - Constants.statusBarHeight,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [height]);

  return (
    <Container style={[style, { height: heightAnim }]}>
      <HeaderSearchByDrugName show={!activeSearchByAtc} />
      <HeaderSearchByAtc
        page={page}
        active={activeSearchByAtc}
        onActive={handleActivateSearchByAtc}
        onDisable={handleDisableSearchByAtc}
      />
    </Container>
  );
}
