import React, { useState } from 'react';
import styled from 'styled-components/native';

import TopBarProduct from '../../components/TopBarProduct';
import TabInformation from '../../components/TabInformation';
import TabDocumentation from '../../components/TabDocumentation';
import DistributionPoints from '../../components/DistributionPoints';

const INFORMATION = 1;
const DOCUMENTATION = 2;
const DISTRIBUTION_STATIONS = 3;

const Container = styled.View`
  height: 100%;
  background-color: #e6e6e6;
`;

const Header = styled.View`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  height: 10%;
  background-color: #265ad2;
  z-index: 6;
`;

export default function Product() {
  const [selectedTab, setSelectedTab] = useState(INFORMATION);
  const medicalInputs = ['Dipirona', 'Isometepteno', 'Cafeína'];
  const group = ['Analgésico', 'Miorrelaxantes (Relaxante muscular)'];
  const locations = [
    {
      latitude: -16.7722688,
      longitude: -49.3351947,
    },
    {
      latitude: -16.7725402,
      longitude: -49.3352924,
    },

    {
      latitude: -16.7745949,
      longitude: -49.3385292,
    },
    {
      latitude: -16.771277,
      longitude: -49.3368562,
    },
    {
      latitude: -16.7703893,
      longitude: -49.3343123,
    },
    {
      latitude: -16.7490517,
      longitude: -49.3500865,
    },
    {
      latitude: -16.7735328,
      longitude: -49.3355725,
    },
    {
      latitude: -16.7716526,
      longitude: -49.3363341,
    },
    {
      latitude: -16.7711472,
      longitude: -49.3353794,
    },
    {
      latitude: -16.7719599,
      longitude: -49.3369189,
    },
    {
      latitude: -16.7723738,
      longitude: -49.3367971,
    },
  ];

  const handleChangeTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Container horizontal={false}>
      <Header></Header>
      <TopBarProduct selectedTab={selectedTab} onChangeTab={handleChangeTab} />
      {selectedTab === INFORMATION && (
        <TabInformation medicalInputs={medicalInputs} group={group} />
      )}
      {selectedTab === DOCUMENTATION && <TabDocumentation />}
      {selectedTab === DISTRIBUTION_STATIONS && (
        <DistributionPoints locations={locations} />
      )}
    </Container>
  );
}
