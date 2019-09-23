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

/* Fetching results by page */

export interface FetchCharactersByPageRequest {
  type: constants.FETCH_CHARACTERS_BY_PAGE_REQUEST;
  payload: number;
}
export interface FetchCharactersByPageSuccess {
  type: constants.FETCH_CHARACTERS_BY_PAGE_SUCCESS;
  payload: Array<IResults>;
}
export interface FetchCharactersByPageFailure {
  type: constants.FETCH_CHARACTERS_BY_PAGE_FAILURE;
  payload: string;
}

export type FetchCharactersByPageAction =
  | FetchCharactersByPageRequest
  | FetchCharactersByPageSuccess
  | FetchCharactersByPageFailure;

export const fetchCharactersByPageRequest = (
  page: number
): FetchCharactersByPageRequest => {
  return {
    type: constants.FETCH_CHARACTERS_BY_PAGE_REQUEST,
    payload: page
  };
};

export const fetchCharactersByPage = (
  payload: Array<IResults>
): FetchCharactersByPageSuccess => {
  return {
    type: constants.FETCH_CHARACTERS_BY_PAGE_SUCCESS,
    payload
  };
};
