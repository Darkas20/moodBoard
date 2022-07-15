import React, { memo } from 'react';

import { Text as RNText, TextProps, StyleProp, TextStyle } from 'react-native';

import { Typography } from 'styles';
import { scaleFont } from 'styles/mixins';

interface IProps extends TextProps {
  children?: string | number;
  fontSize: number;
  color: string;
  weight?: 'bold' | 'normal';
  center?: boolean;
  textDecorationLine?: string;
}

/**
 * Component represents extended Text component with predefined styles
 */
const Text = ({
  children,
  color,
  weight,
  center,
  textDecorationLine,
  fontSize,
  ...otherProps
}: IProps) => {
  return (
    <RNText
      {...otherProps}
      style={
        {
          fontSize: scaleFont(fontSize),
          color,
          ...(weight === 'bold'
            ? Typography.FONT_BOLD
            : Typography.FONT_REGULAR),
          textAlign: center ? 'center' : 'left',
          textDecorationLine: textDecorationLine || 'none',
        } as StyleProp<TextStyle>
      }>
      {children}
    </RNText>
  );
};

export default memo(Text);
