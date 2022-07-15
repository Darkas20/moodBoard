import { BoardItem } from 'interfaces/board';
import {
  GetItemsAction,
  GetItemsStartAction,
  MoodBoardActionTypes,
  ResetSortingAction,
  SaveSortingAction,
  SetItemsAction,
  SetSearchQueryAction,
  SetSearchStatusAction,
  SetSortingStatusAction,
  SetTempItemsAction,
} from './types';

export const getBoardItems = (): GetItemsAction => ({
  type: MoodBoardActionTypes.GET_ITEMS,
});

export const getBoardItemsStart = (): GetItemsStartAction => ({
  type: MoodBoardActionTypes.GET_ITEMS_START,
});

export const setBoardItems = (payload: BoardItem[]): SetItemsAction => ({
  type: MoodBoardActionTypes.SET_ITEMS,
  payload,
});

export const setBoardTempItems = (
  payload: BoardItem[],
): SetTempItemsAction => ({
  type: MoodBoardActionTypes.SET_TEMP_ITEMS,
  payload,
});

export const setSearchQuery = (payload: string): SetSearchQueryAction => ({
  type: MoodBoardActionTypes.SET_SEARCH_QUERY,
  payload,
});

export const setSearchStatus = (payload: boolean): SetSearchStatusAction => ({
  type: MoodBoardActionTypes.SET_SEARCH_STATUS,
  payload,
});

export const setSortingStatus = (payload: boolean): SetSortingStatusAction => ({
  type: MoodBoardActionTypes.SET_SORTING_STATUS,
  payload,
});

export const resetSorting = (): ResetSortingAction => ({
  type: MoodBoardActionTypes.RESET_SORTING,
});

export const saveSorting = (): SaveSortingAction => ({
  type: MoodBoardActionTypes.SAVE_SORTING,
});
