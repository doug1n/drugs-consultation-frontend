import React from 'react';
import styled from 'styled-components/native';

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
            title="Selecione o ATC"
            active
            italic={page === screens.CHOOSE_BY_ATC}
          />
          <AtcButton
            show={page >= screens.CHOOSE_BY_THERAPEUTIC_GROUP}
            title="Selecione o grupo terapêutico"
            active
            italic={page === screens.CHOOSE_BY_THERAPEUTIC_GROUP}
          />
          <AtcButton
            show={page >= screens.CHOOSE_BY_PHARMACOLOGICAL_GROUP}
            title="Selecione o grupo farmacológico"
            active
            italic={page === screens.CHOOSE_BY_PHARMACOLOGICAL_GROUP}
          />
        </>
      )}
    </Container>
  );
}
