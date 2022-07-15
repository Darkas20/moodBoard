import React from 'react';
import styled from 'styled-components/native';
import { Colors, Spacing } from 'styles';
import Icon from './Icon';

interface Props {
  icon: string;
  onPress: () => void;
  iconSize?: number;
  iconColor?: string;
  hasIndicator?: boolean;
}

const ActionButton = (props: Props) => {
  const { icon, onPress, iconSize, iconColor, hasIndicator } = props;

  return (
    <Container onPress={onPress}>
      <Icon
        name={icon}
        size={iconSize || 15}
        color={iconColor || Colors.TYPO_TEXT_PRIMARY}
      />
      {hasIndicator ? <Indicator /> : <></>}
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  background-color: transparent;
  width: ${Spacing.SIZE[23]}px;
  height: ${Spacing.SIZE[23]}px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Indicator = styled.View`
  background-color: ${Colors.TYPO_ALERT};
  width: ${Spacing.SIZE[3]}px;
  height: ${Spacing.SIZE[3]}px;
  position: absolute;
  top: 0;
  right: 0;
`;

export default ActionButton;
