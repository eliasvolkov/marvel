import { IState } from "./model";
import { fetchCharactersAction, FetchCharactersByPageAction } from "./actions";
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTERS_BY_PAGE_REQUEST,
  FETCH_CHARACTERS_BY_PAGE_SUCCESS,
  FETCH_CHARACTERS_BY_PAGE_FAILURE
} from "./constants";

const initialstate: IState = {
  loading: false,
  data: [],
  error: ""
};

export const reducer = (
  state: IState = initialstate,
  action: fetchCharactersAction
): IState => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_CHARACTERS_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case FETCH_CHARACTERS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const fetchCharactersByPageReducer = (
  state: IState = initialstate,
  action: FetchCharactersByPageAction
): IState => {
  switch (action.type) {
    case FETCH_CHARACTERS_BY_PAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_CHARACTERS_BY_PAGE_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case FETCH_CHARACTERS_BY_PAGE_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
