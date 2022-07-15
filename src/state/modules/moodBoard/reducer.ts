import { MoodBoardState, MoodBoardAction, MoodBoardActionTypes } from './types';

export const initialState: MoodBoardState = {
  items: [],
  isLoading: false,
  tempList: [],
  searchQuery: '',
  isSortingEnabled: false,
  isSearchEnabled: false,
};

export const moodBoardReducer = (
  state: MoodBoardState = initialState,
  action: MoodBoardAction,
): MoodBoardState => {
  switch (action.type) {
    case MoodBoardActionTypes.GET_ITEMS_START:
      return { ...state, isLoading: true };
    case MoodBoardActionTypes.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        tempList: action.payload,
        isLoading: false,
      };
    case MoodBoardActionTypes.SET_TEMP_ITEMS:
      return { ...state, tempList: action.payload };
    case MoodBoardActionTypes.SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case MoodBoardActionTypes.SET_SEARCH_STATUS:
      return {
        ...state,
        isSearchEnabled: action.payload,
        isSortingEnabled: false,
      };
    case MoodBoardActionTypes.SET_SORTING_STATUS:
      return {
        ...state,
        isSortingEnabled: action.payload,
        isSearchEnabled: false,
      };
    default:
      return state;
  }
};
