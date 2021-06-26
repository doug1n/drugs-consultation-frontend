/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Main from './src';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Main />
    </>
  );
}
