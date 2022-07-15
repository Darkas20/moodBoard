import { combineReducers, Reducer, AnyAction } from 'redux';
import { all, fork } from 'redux-saga/effects';

import { moodBoardReducer, moodBoardSaga } from './moodBoard';

const combinedReducer = combineReducers({
  moodBoard: moodBoardReducer,
});

export const rootReducer: Reducer = (state, action: AnyAction) => {
  return combinedReducer(state, action);
};

export function* rootSaga() {
  const sagas = [moodBoardSaga].filter(saga => saga !== undefined);
  yield all(sagas.map(saga => fork(saga)));
}

export type State = ReturnType<typeof rootReducer>;

export type AppState = ReturnType<typeof rootReducer>;
