import { delay, put, takeLatest, select } from 'redux-saga/effects';

import { MoodBoardActionTypes } from './types';
import * as moodBoardActions from './actions';
import { boardItems } from 'utils/boardItems';
import { getMoodBoardItems, getMoodBoardTempItems } from './selectors';
import { BoardItem } from 'interfaces/board';

function* handleLoadItems() {
  yield put(moodBoardActions.getBoardItemsStart());

  try {
    yield delay(1000);

    yield put(moodBoardActions.setBoardItems(boardItems));
  } catch (error) {
    console.log({ error });
  }
}

function* handleResetSorting() {
  const list = (yield select(getMoodBoardItems)) as BoardItem[];

  yield put(moodBoardActions.setBoardTempItems(list));
}

function* handleSaveSorting() {
  const list = (yield select(getMoodBoardTempItems)) as BoardItem[];

  yield put(moodBoardActions.setBoardItems(list));
}

export function* moodBoardSaga(): Generator {
  yield takeLatest(MoodBoardActionTypes.GET_ITEMS, handleLoadItems);
  yield takeLatest(MoodBoardActionTypes.RESET_SORTING, handleResetSorting);
  yield takeLatest(MoodBoardActionTypes.SAVE_SORTING, handleSaveSorting);
}
