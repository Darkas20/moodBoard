import React from 'react';
import styled from 'styled-components/native';
import dayjs from 'dayjs';

import Icon from './Icon';
import Text from './Text';

import { ICON_SIZE } from 'styles/sizes';

import { Colors, Spacing } from 'styles';

interface Props {
  date: string | Date;
}

const BoardItemDate = (props: Props) => {
  const { date } = props;

  return (
    <Container>
      <IconContainer>
        <Icon
          name="calendar"
          size={ICON_SIZE[16]}
          color={Colors.TYPO_TEXT_SECONDARY}
        />
      </IconContainer>
      <Text fontSize={12} color={Colors.TYPO_TEXT_SECONDARY}>
        {dayjs(date).format('MM.DD.YY')}
      </Text>
    </Container>
  );
};

const IconContainer = styled.View`
  margin-right: ${Spacing.SIZE[7]}px;
`;

const Container = styled.View`
  background-color: ${Colors.BG_TERTIARY};
  border-radius: ${Spacing.SIZE[4]}px;
  padding: ${Spacing.SIZE[5]}px;
  flex-direction: row;
  width: ${Spacing.SIZE[84]}px;
`;

export default BoardItemDate;
