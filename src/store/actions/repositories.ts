import axios from 'axios';
import { Dispatch } from 'redux';
import { REPOSITORIES_ACTION_TYPES } from '../action.types/repositories';

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

export const searchRepositories = (text: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: REPOSITORIES_ACTION_TYPES.SEARCH_REPOSITORIES
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text
          }
        }
      );
      console.log(data);

      const result = data.objects.map(
        (npmPackage: { package: { name: string } }) => npmPackage.package.name
      );

      dispatch({
        type: REPOSITORIES_ACTION_TYPES.SEARCH_REPOSITORIES_SUCESS,
        payload: result
      });
    } catch (err: any) {
      dispatch({
        type: REPOSITORIES_ACTION_TYPES.SEARCH_REPOSITORIES_ERROR,
        payload: err.message
      });
    }
  };
};
