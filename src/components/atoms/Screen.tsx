import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { Colors } from '_styles';

interface IProps {
  children?: JSX.Element | JSX.Element[] | (false | Element);
}

/**
 * Component represents common screen wrapper and shares common screen styles
 */

const Screen = ({ children }: IProps): JSX.Element => {
  return (
    <Container>
      <>
        <StatusBar
          backgroundColor={Colors.BG_DEFAULT}
          barStyle="dark-content"
        />
        {children}
      </>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${Colors.BG_DEFAULT};
  flex: 1;
`;

export default Screen;
