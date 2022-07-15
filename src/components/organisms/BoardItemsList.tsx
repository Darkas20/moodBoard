import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { BoardItem } from 'interfaces/board';
import { BoardCard } from 'components/molecules';
import styled from 'styled-components/native';
import { Colors, Spacing } from 'styles';
import { Text } from 'components/atoms';
import { useSelector } from 'react-redux';
import {
  getMoodBoardItems,
  getMoodBoardLoading,
  getMoodBoardSearchQuery,
} from 'state/modules/moodBoard';

const BoardItemsList = () => {
  const itemsList = useSelector(getMoodBoardItems);
  const searchQuery = useSelector(getMoodBoardSearchQuery);
  const isLoading = useSelector(getMoodBoardLoading);

  const filteredList = useMemo(
    () => itemsList.filter(item => item.title.includes(searchQuery)),
    [searchQuery, itemsList],
  );

  const renderItem = ({ item }: { item: BoardItem }) => (
    <ItemContainer>
      <BoardCard data={item} />
    </ItemContainer>
  );

  return (
    <Container>
      <FlatList
        data={filteredList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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

const MessageContainer = styled.View``;

const ItemContainer = styled.View`
  padding: ${Spacing.SIZE[8]}px 0;
`;

const Container = styled.View`
  padding: 0 ${Spacing.SIZE[16]}px;
  flex: 1;
`;

export default BoardItemsList;
