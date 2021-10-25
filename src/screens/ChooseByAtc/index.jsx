import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components/native';
import { AppContext } from '../../AppContext';

import AtcCard from '../../components/AtcCard';
import { getAtcs } from '../../services/drugsConsultationApi';

const FlatList = styled.FlatList`
  padding-right: 24.5px;
  padding-left: 24.5px;
  z-index: 1;
`;

export default function ChooseByAtc() {
  const { currentAtc, setCurrentAtc } = useContext(AppContext);
  const [atcs, setAtcs] = useState([]);

  useEffect(() => {
    setCurrentAtc([]);
  }, []);

  useEffect(() => {
    getAtcs(currentAtc?.[currentAtc.length - 1]?.id ?? '').then((response) => {
      setAtcs(response);
    });
  }, [currentAtc]);

  return (
    <FlatList
      data={atcs}
      renderItem={({ item }) => (
        <AtcCard
          title={item.description}
          onPress={() => {
            setCurrentAtc((current) =>
              current.concat({
                id: item.id,
                description: item.description,
              })
            );
          }}
        />
      )}
    />
  );
}
