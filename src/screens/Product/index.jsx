import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';

import TopBarProduct from '../../components/TopBarProduct';
import TabInformation from '../../components/TabInformation';
import TabDocumentation from '../../components/TabDocumentation';
import DistributionPoints from '../../components/DistributionPoints';
import { AppContext } from '../../AppContext';

const INFORMATION = 0;
const DOCUMENTATION = 1;
const DISTRIBUTION_STATIONS = 2;

const Container = styled.View`
  height: 100%;
  background-color: #e6e6e6;
`;

export default function Product() {
  const { setCurrentPage, previousPage } = useContext(AppContext);

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

  const handleBack = () => {
    setCurrentPage(previousPage);
  };

  return (
    <Container>
      <TopBarProduct
        selectedTab={selectedTab}
        onChangeTab={handleChangeTab}
        onBack={handleBack}
      />
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
