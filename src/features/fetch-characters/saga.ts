import { IResults } from "./../../shared/models/response";
import { fetchCharactersApi } from "./../../shared/api/index";
import { fetchCharacters, fetchCharactersRequest } from "./actions";
import { call, takeEvery, put } from "redux-saga/effects";
import { FETCH_CHARACTERS_REQUEST } from "./constants";

export function* fetchCharactersAsync(): Generator {
  const characters: any = yield call(fetchCharactersApi);
  yield put(fetchCharacters(characters));
}

export function* fetchCharactersStart() {
  yield takeEvery(FETCH_CHARACTERS_REQUEST, fetchCharactersAsync);
}
