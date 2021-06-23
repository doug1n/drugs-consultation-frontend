import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  color: white;
  font-size: 14px;
`;

export default function BottomNavigationButtonLabel({ label }) {
  return <Text>{label}</Text>;
}
