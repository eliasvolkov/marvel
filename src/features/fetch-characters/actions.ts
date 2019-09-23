import { IResults } from "./../../shared/models/response";
import * as constants from "./constants";

export interface FetchCharactersRequest {
  type: constants.FETCH_CHARACTERS_REQUEST;
}
export interface FetchCharactersSuccess {
  type: constants.FETCH_CHARACTERS_SUCCESS;
  payload: Array<IResults>;
}
export interface FetchCharactersFailure {
  type: constants.FETCH_CHARACTERS_FAILURE;
  payload: string;
}

export type fetchCharactersAction =
  | FetchCharactersRequest
  | FetchCharactersSuccess
  | FetchCharactersFailure;

export const fetchCharactersRequest = (): FetchCharactersRequest => {
  return {
    type: constants.FETCH_CHARACTERS_REQUEST
  };
};
export const fetchCharacters = (
  payload: Array<IResults>
): FetchCharactersSuccess => {
  return {
    type: constants.FETCH_CHARACTERS_SUCCESS,
    payload
  };
};
