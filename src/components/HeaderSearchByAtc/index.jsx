import React, { useContext, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import styled from 'styled-components/native';
import { AppContext } from '../../AppContext';

import screens from '../../screens';
import ButtonComponent from '../Button';

const Container = styled.View``;

const Button = styled(ButtonComponent)`
  margin-top: 8px;
`;

function AtcButton({ show, ...rest }) {
  return show && <Button {...rest} />;
}

export default function HeaderSearchByAtc({
  page,
  active,
  onActive,
  onDisable,
}) {
  const { currentPage, currentAtc, setCurrentAtc } = useContext(AppContext);
  const [chooseByAtc, setChooseByAtc] = useState([]);

  useEffect(() => {
    setChooseByAtc([]);
    setCurrentAtc([]);
  }, [currentPage]);

  useEffect(() => {
    if (currentAtc?.[0]) {
      setChooseByAtc([currentAtc[0]]);
    }

    if (currentAtc?.[1]) {
      setChooseByAtc([currentAtc[0], currentAtc[1]]);
    }

    if (currentAtc?.[2]) {
      setChooseByAtc([currentAtc[0], currentAtc[1], currentAtc[2]]);
    }
  }, [currentAtc]);

  return (
    <Container>
      {!active && <Button title="Buscar pelo ATC" onPress={onActive} />}
      {active && (
        <>
          <AtcButton
            title="Buscar pelo nome do medicamento"
            onPress={onDisable}
            show
          />
          <AtcButton
            show={page >= screens.CHOOSE_BY_ATC}
            title={chooseByAtc?.[0]?.description ?? 'Selecione o ATC'}
            active
            italic={currentAtc.length === 0}
          />
          <AtcButton
            show={page >= screens.CHOOSE_BY_ATC && currentAtc.length >= 1}
            title={
              chooseByAtc?.[1]?.description ?? 'Selecione o grupo terapêutico'
            }
            active
            italic={currentAtc.length === 1}
          />
          <AtcButton
            show={page >= screens.CHOOSE_BY_ATC && currentAtc.length >= 2}
            title={
              chooseByAtc?.[2]?.description ?? 'Selecione o grupo farmacológico'
            }
            active
            italic={currentAtc.length === 2}
          />
        </>
      )}
    </Container>
  );
}
