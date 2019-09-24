import { IResults } from "./../../shared/models/response";
import {
  fetchCharactersApi,
  fetchCharactersApiByPage
} from "./../../shared/api/index";
import {
  fetchCharacters,
  fetchCharactersByPage,
  FetchCharactersByPageRequest
} from "./actions";
import { call, takeEvery, put } from "redux-saga/effects";
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_BY_PAGE_REQUEST
} from "./constants";

export function* fetchCharactersAsync(): Generator {
  const characters: any = yield call(fetchCharactersApi);
  yield put(fetchCharacters(characters));
}

export function* fetchCharactersStart() {
  yield takeEvery(FETCH_CHARACTERS_REQUEST, fetchCharactersAsync);
}

//Fetching By Page

export function* fetchCharactersByPageAsync(
  action: FetchCharactersByPageRequest
) {
  console.log(action.payload);
  const characters: any = yield call(fetchCharactersApiByPage, action.payload);
  yield put(fetchCharactersByPage(characters));
}

export function* fetchCharactersByPageStart() {
  yield takeEvery(FETCH_CHARACTERS_BY_PAGE_REQUEST, fetchCharactersByPageAsync);
}
