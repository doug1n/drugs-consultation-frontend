import React, { useState } from 'react';
import styled from 'styled-components/native';

import HeaderSearchByDrugNameComponent from '../HeaderSearchByDrugName';
import HeaderTitleConfigsComponent from '../HeaderTitleConfigs';
import HeaderSearchByAtcComponent from '../HeaderSearchByAtc';

const DEFAULT_HEIGHT = 206.5;
const HEIGHT_WITH_ACTIVE_SEARCH_BY_ATC = 226.5;

const Container = styled.View`
  height: ${(props) => props.height - props.statusBarHeight}px;
  padding: 15px;
`;

const HeaderTitleConfigs = styled(HeaderTitleConfigsComponent)`
  z-index: 3;
`;

const HeaderSearchByDrugName = styled(HeaderSearchByDrugNameComponent)`
  z-index: 2;
`;

const HeaderSearchByAtc = styled(HeaderSearchByAtcComponent)`
  z-index: 1;
`;

export default function Header({ style, statusBarHeight }) {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [activeSearchByAtc, setActiveSearchByAtc] = useState(false);

  const handleActivateSearchByAtc = () => {
    setActiveSearchByAtc(true);
    setHeight(HEIGHT_WITH_ACTIVE_SEARCH_BY_ATC);
  };

  const handleDisableSearchByAtc = () => {
    setActiveSearchByAtc(false);
    setHeight(DEFAULT_HEIGHT);
  };

  return (
    <Container style={style} height={height} statusBarHeight={statusBarHeight}>
      <HeaderTitleConfigs />
      <HeaderSearchByDrugName show={!activeSearchByAtc} />
      <HeaderSearchByAtc
        active={activeSearchByAtc}
        onActive={handleActivateSearchByAtc}
        onDisable={handleDisableSearchByAtc}
      />
    </Container>
  );
}
