import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import { Screen } from 'components/atoms';
import { Header } from 'components/molecules';
import { BoardItemsDraggableList, BoardItemsList } from 'components/organisms';

import {
  getBoardItems,
  getMoodBoardSortingEnabledStatus,
} from 'state/modules/moodBoard';
import sagaMiddleware from 'state/middlewares/saga';
import { rootSaga } from 'state/modules';

sagaMiddleware.run(rootSaga);

const OverviewScreen = () => {
  console.log('OverviewScreen');
  const isSortingEnabled = useSelector(getMoodBoardSortingEnabledStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardItems());
  }, [dispatch]);

  const renderContent = () => {
    if (isSortingEnabled) {
      return <BoardItemsDraggableList />;
    }

    return <BoardItemsList />;
  };

  return (
    <Screen>
      <Header />
      <Container>{renderContent()}</Container>
    </Screen>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default OverviewScreen;
