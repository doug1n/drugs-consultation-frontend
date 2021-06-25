import React from 'react';
import styled from 'styled-components/native';

import HeaderSearchSuggestionOption from '../HeaderSearchSuggestionOption';

const Container = styled.ScrollView`
  max-height: 420px;
  background-color: #265ad2;
  border-radius: 23.7px;
  position: absolute;
  width: 100%;
  top: 0;
  padding: 62px 10px 10px;
`;

const Spacer = styled.View`
  margin-bottom: 67px;
`;

export default function HeaderSearchSuggestion({ styled, open }) {
  return (
    open && (
      <Container styled={styled}>
        <HeaderSearchSuggestionOption description="Butilbrometo de escopolamina + Dipirona sódica injetávelButilbrometo de escopolamina + Dipirona sódica injetávelButilbrometo de escopolamina + Dipirona sódica injetável" />
        <HeaderSearchSuggestionOption description="Butilbrometo de escopolamina + Dipirona sódica injetávelButilbrometo de escopolamina + Dipirona sódica injetávelButilbrometo de escopolamina + Dipirona sódica injetável" />
        <HeaderSearchSuggestionOption description="Butilbrometo de escopolamina + Dipirona sódica injetávelButilbrometo de escopolamina + Dipirona sódica injetávelButilbrometo de escopolamina + Dipirona sódica injetável" />
        <HeaderSearchSuggestionOption description="Butilbrometo de escopolamina + Dipirona sódica injetávelButilbrometo de escopolamina + Dipirona sódica injetávelButilbrometo de escopolamina + Dipirona sódica injetável" />
        <HeaderSearchSuggestionOption description="Butilbrometo de escopolamina + Dipirona sódica injetávelButilbrometo de escopolamina + Dipirona sódica injetávelButilbrometo de escopolamina + Dipirona sódica injetável" />
        <HeaderSearchSuggestionOption description="Butilbrometo de escopolamina + Dipirona sódica injetávelButilbrometo de escopolamina + Dipirona sódica injetávelButilbrometo de escopolamina + Dipirona sódica injetável" />
        <Spacer />
      </Container>
    )
  );
}
