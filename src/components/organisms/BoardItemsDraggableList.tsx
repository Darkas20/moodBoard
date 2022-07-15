import React from 'react';
import styled from 'styled-components/native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { useDispatch, useSelector } from 'react-redux';

import { BoardCard } from 'components/molecules';
import { Text } from 'components/atoms';

import {
  getMoodBoardLoading,
  getMoodBoardTempItems,
  setBoardTempItems,
} from 'state/modules/moodBoard';

import { BoardItem } from 'interfaces/board';

import { Colors, Spacing } from '_styles';

const BoardItemsDraggableList = () => {
  const isLoading = useSelector(getMoodBoardLoading);
  const itemsList = useSelector(getMoodBoardTempItems);

  const dispatch = useDispatch();

  const handleUpdate = (updatedList: BoardItem[]) => {
    dispatch(setBoardTempItems(updatedList));
  };

  const renderItem = ({ item, drag, isActive }: any) => (
    <ItemContainer isActive={isActive} onLongPress={drag} disabled={isActive}>
      <BoardCard data={item} draggable />
    </ItemContainer>
  );

  return (
    <Container>
      <DraggableFlatList
        data={itemsList}
        onDragEnd={({ data }) => handleUpdate(data)}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListFooterComponent={
          isLoading ? (
            <MessageContainer>
              <Text fontSize={16} color={Colors.TYPO_TEXT_SECONDARY}>
                Loading...
              </Text>
            </MessageContainer>
          ) : (
            <></>
          )
        }
        ListEmptyComponent={
          !isLoading ? (
            <MessageContainer>
              <Text fontSize={16} color={Colors.TYPO_TEXT_SECONDARY}>
                Empty List
              </Text>
            </MessageContainer>
          ) : (
            <></>
          )
        }
      />
    </Container>
  );
};

const MessageContainer = styled.View`
  padding: ${Spacing.SIZE[8]}px ${Spacing.SIZE[16]}px;
`;

const ItemContainer = styled.TouchableOpacity<{ isActive: boolean }>`
  padding: ${Spacing.SIZE[8]}px ${Spacing.SIZE[16]}px;
  background-color: ${props =>
    props.isActive ? Colors.BG_PRESSED : 'transparent'};
`;

const Container = styled.View`
  flex: 1;
`;

export default BoardItemsDraggableList;
