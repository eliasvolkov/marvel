import { IResults } from "./../../shared/models/response";

export interface IState {
  loading: boolean;
  data: Array<IResults>;
  error: string;
}
