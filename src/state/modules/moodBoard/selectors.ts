import { createSelector } from 'reselect';

import { State } from '../index';
import { MoodBoardState } from './types';

export const getMoodBoardState = (state: State): MoodBoardState =>
  state.moodBoard;

export const getMoodBoardLoading = createSelector(
  getMoodBoardState,
  state => state.isLoading,
);

export const getMoodBoardItems = createSelector(
  getMoodBoardState,
  state => state.items,
);

export const getMoodBoardTempItems = createSelector(
  getMoodBoardState,
  state => state.tempList,
);

export const getMoodBoardSearchQuery = createSelector(
  getMoodBoardState,
  state => state.searchQuery,
);

export const getMoodBoardSearchEnabledStatus = createSelector(
  getMoodBoardState,
  state => state.isSearchEnabled,
);

export const getMoodBoardSortingEnabledStatus = createSelector(
  getMoodBoardState,
  state => state.isSortingEnabled,
);
