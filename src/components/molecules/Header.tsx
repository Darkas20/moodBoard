import React from 'react';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import { ActionButton, Input, Text } from 'components/atoms';

import { Colors, Sizes, Spacing } from 'styles';

import {
  getMoodBoardSearchEnabledStatus,
  getMoodBoardSearchQuery,
  getMoodBoardSortingEnabledStatus,
  resetSorting,
  saveSorting,
  setSearchQuery,
  setSearchStatus,
  setSortingStatus,
} from 'state/modules/moodBoard';

const Header = () => {
  const searchQuery = useSelector(getMoodBoardSearchQuery);
  const isSortingEnabled = useSelector(getMoodBoardSortingEnabledStatus);
  const isSearchEnabled = useSelector(getMoodBoardSearchEnabledStatus);

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveSorting());
  };

  const handleCancelSorting = () => {
    dispatch(resetSorting());
    dispatch(setSortingStatus(false));
    dispatch(setSearchStatus(false));
  };

  const handleToggleSearch = () => {
    dispatch(setSearchStatus(!isSearchEnabled));
  };

  const handleToggleSorting = () => {
    dispatch(setSortingStatus(!isSortingEnabled));
  };

  const handleSearch = (value: string) => {
    dispatch(setSearchQuery(value));
  };

  const handleCancelSearch = () => {
    dispatch(setSearchStatus(false));
    dispatch(setSearchQuery(''));
  };

  const renderGoBackButton = () => {
    return (
      <ActionButton
        icon="arrowleft"
        onPress={handleCancelSorting}
        iconSize={Sizes.ICON_SIZE[16]}
        iconColor={Colors.TYPO_TEXT_PRIMARY}
      />
    );
  };

  const renderActionsPanel = () => {
    return (
      <ActionsContainer>
        <ActionButton
          icon="sort"
          onPress={handleToggleSorting}
          iconSize={Sizes.ICON_SIZE[18]}
          iconColor={Colors.TYPO_TEXT_PRIMARY}
        />
        <ActionButton
          icon="search"
          onPress={handleToggleSearch}
          iconSize={Sizes.ICON_SIZE[16]}
          iconColor={Colors.TYPO_TEXT_PRIMARY}
        />
        <ActionButton
          icon="options"
          onPress={() => console.log()}
          iconSize={Sizes.ICON_SIZE[18]}
          iconColor={Colors.TYPO_TEXT_PRIMARY}
        />
      </ActionsContainer>
    );
  };

  const renderTitle = (title: string) => {
    return (
      <Text
        fontSize={!isSearchEnabled && !isSortingEnabled ? 32 : 20}
        color={Colors.TYPO_TEXT_PRIMARY}>
        {title}
      </Text>
    );
  };

  const renderContnet = () => {
    if (isSearchEnabled) {
      return (
        <>
          <InputContainer>
            <Input
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Placeholder"
            />
          </InputContainer>
          <Button onPress={handleCancelSearch}>
            <Text fontSize={17} color={Colors.TYPO_TEXT_PRIMARY}>
              Cancel
            </Text>
          </Button>
        </>
      );
    }

    if (isSortingEnabled) {
      return (
        <>
          {renderGoBackButton()}
          {renderTitle('Reorder')}
          <Button onPress={handleSave}>
            <Text fontSize={17} color={Colors.TYPO_TEXT_PRIMARY}>
              Save
            </Text>
          </Button>
        </>
      );
    }

    return (
      <>
        {renderTitle('Mood Board')}
        {renderActionsPanel()}
      </>
    );
  };

  return <Container>{renderContnet()}</Container>;
};

const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${Spacing.SIZE[105]}px;
  justify-content: space-between;
`;

const InputContainer = styled.View`
  margin-right: ${Spacing.SIZE[16]}px;
  flex: 1;
`;

const Button = styled.TouchableOpacity``;

const Container = styled.View`
  justify-content: space-between;
  padding: 0 ${Spacing.SIZE[16]}px;
  height: ${Spacing.SIZE[64]}px;
  flex-direction: row;
  align-items: center;
`;

export default Header;
