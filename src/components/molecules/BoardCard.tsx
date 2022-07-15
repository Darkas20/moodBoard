import React from 'react';
import styled from 'styled-components/native';

import { ActionButton, BoardItemDate, Icon, Text } from 'components/atoms';

import { BoardItem } from 'interfaces/board';

import { Spacing, Colors, Sizes } from 'styles';

interface Props {
  data: BoardItem;
  draggable?: boolean;
}

const BoardCard = (props: Props) => {
  const { data, draggable } = props;
  const { title, date, notificationsCount, messagesCount } = data;

  const renderActions = () => {
    if (draggable) {
      return (
        <DraggableAnchor>
          <Icon
            name="menu"
            size={Sizes.ICON_SIZE[12]}
            color={Colors.TYPO_TEXT_PRIMARY}
          />
        </DraggableAnchor>
      );
    }

    return (
      <ActionsContainer>
        <ActionButton
          icon="bell"
          onPress={() => console.log()}
          iconSize={Sizes.ICON_SIZE[13]}
          iconColor={Colors.TYPO_TEXT_PRIMARY}
          hasIndicator={notificationsCount > 0}
        />
        <ActionButton
          icon="message"
          onPress={() => console.log()}
          iconSize={Sizes.ICON_SIZE[18]}
          iconColor={Colors.TYPO_TEXT_PRIMARY}
          hasIndicator={messagesCount > 0}
        />
        <ActionButton
          icon="options"
          onPress={() => console.log()}
          iconSize={Sizes.ICON_SIZE[13]}
          iconColor={Colors.TYPO_TEXT_PRIMARY}
          hasIndicator={false}
        />
      </ActionsContainer>
    );
  };

  return (
    <Container>
      <Info>
        <TitleContainer>
          <Text color={Colors.TYPO_TEXT_PRIMARY} fontSize={17}>
            {title}
          </Text>
        </TitleContainer>
        <BoardItemDate date={date} />
      </Info>
      {renderActions()}
    </Container>
  );
};

const DraggableAnchor = styled.View`
  margin-left: auto;
`;

const TitleContainer = styled.View`
  margin-bottom: 4px;
`;

const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  width: ${Spacing.SIZE[80]}px;
  justify-content: space-between;
`;

const Info = styled.View``;

const Container = styled.View`
  align-items: center;
  padding: 0 ${Spacing.SIZE[16]}px;
  height: ${Spacing.SIZE[64]}px;
  background-color: ${Colors.BG_SECONDARY};
  border-radius: ${Spacing.SIZE[16]}px;
  flex-direction: row;
`;

export default BoardCard;
