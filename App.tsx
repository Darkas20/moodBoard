/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import styled from 'styled-components/native';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'react-native-get-random-values';
import { Provider as StateProvider } from 'react-redux';
import { store } from 'state';

import { OverviewScreen } from 'screens';
import { Colors } from 'styles';

dayjs.extend(localizedFormat);

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.BG_DEFAULT};
`;

const App = () => {
  return (
    <StateProvider store={store}>
      <Container>
        <OverviewScreen />
      </Container>
    </StateProvider>
  );
};

export default App;
