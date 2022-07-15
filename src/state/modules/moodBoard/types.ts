import { BoardItem } from 'interfaces/board';

export interface MoodBoardState {
  items: BoardItem[];
  tempList: BoardItem[];
  isLoading: boolean;
  searchQuery: string;
  isSortingEnabled: boolean;
  isSearchEnabled: boolean;
}

export enum MoodBoardActionTypes {
  GET_ITEMS = '@@moodBoard/GET_ITEMS',
  GET_ITEMS_START = '@@moodBoard/GET_ITEMS_START',
  SET_ITEMS = '@@moodBoard/SET_ITEMS',
  SET_TEMP_ITEMS = '@@moodBoard/SET_TEMP_ITEMS',

  SET_SEARCH_QUERY = '@@moodBoard/SET_SEARCH_QUERY',

  SET_SORTING_STATUS = '@@moodBoard/SET_SORTING_STATUS',
  SET_SEARCH_STATUS = '@@moodBoard/SET_SEARCH_STATUS',

  RESET_SORTING = '@@moodBoard/RESET_SORTING',
  SAVE_SORTING = '@@moodBoard/SAVE_SORTING',
}

export interface GetItemsAction {
  type: MoodBoardActionTypes.GET_ITEMS;
}
export interface GetItemsStartAction {
  type: MoodBoardActionTypes.GET_ITEMS_START;
}

export interface SetItemsAction {
  type: MoodBoardActionTypes.SET_ITEMS;
  payload: BoardItem[];
}

export interface SetTempItemsAction {
  type: MoodBoardActionTypes.SET_TEMP_ITEMS;
  payload: BoardItem[];
}

export interface SetSearchStatusAction {
  type: MoodBoardActionTypes.SET_SEARCH_STATUS;
  payload: boolean;
}

export interface SetSortingStatusAction {
  type: MoodBoardActionTypes.SET_SORTING_STATUS;
  payload: boolean;
}

export interface SetSearchQueryAction {
  type: MoodBoardActionTypes.SET_SEARCH_QUERY;
  payload: string;
}

export interface ResetSortingAction {
  type: MoodBoardActionTypes.RESET_SORTING;
}

export interface SaveSortingAction {
  type: MoodBoardActionTypes.SAVE_SORTING;
}

export type MoodBoardAction =
  | GetItemsAction
  | GetItemsStartAction
  | SetItemsAction
  | SetSearchStatusAction
  | SetSortingStatusAction
  | SetSearchQueryAction
  | ResetSortingAction
  | SaveSortingAction
  | SetTempItemsAction;
