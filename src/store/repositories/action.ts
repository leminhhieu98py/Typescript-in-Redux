import { REPOSITORIES_ACTION_TYPES } from './action.type';

interface SearchRepositoriesAction {
  type: REPOSITORIES_ACTION_TYPES.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: REPOSITORIES_ACTION_TYPES.SEARCH_REPOSITORIES_SUCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: REPOSITORIES_ACTION_TYPES.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesErrorAction
  | SearchRepositoriesSuccessAction;
