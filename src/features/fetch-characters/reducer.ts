import { IState } from "./model";
import { fetchCharactersAction } from "./actions";
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE
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
