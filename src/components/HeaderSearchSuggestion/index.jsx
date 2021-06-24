import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 302px;
  background-color: #265ad2;
  border-radius: 23.7px;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 1;
`;

export default function HeaderSearchSuggestion({ open }) {
  return open && <Container />;
}
