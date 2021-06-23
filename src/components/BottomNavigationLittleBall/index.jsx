import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(Animated.View)`
  height: 23px;
  flex-direction: row;
  align-content: center;
`;

const LittleBall = styled.View`
  height: 8px;
  width: 8px;
  background-color: #ff8f66;
  border-radius: 4px;
`;

export default function BottomNavigationLittleBall({ page }) {
  const bottomNavigationAnim = useRef(new Animated.Value(0)).current;

  const getBallPadding = (page) => {
    const windowWidth = Dimensions.get('window').width;

    const squareWidth = windowWidth / 3;
    const halfSquareWidth = squareWidth / 2;
    const halfSquarePlusPageWidth = halfSquareWidth * ((page * 2) + 1);
    const halfSquareWidthMinusHalfBallSizeWidth =
      halfSquarePlusPageWidth - 4 * (page + 1);

    return halfSquareWidthMinusHalfBallSizeWidth;
  };

  useEffect(() => {
    Animated.timing(bottomNavigationAnim, {
      toValue: getBallPadding(page),
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [page]);

  return (
    <Container style={{ left: bottomNavigationAnim }}>
      <LittleBall />
    </Container>
  );
}
