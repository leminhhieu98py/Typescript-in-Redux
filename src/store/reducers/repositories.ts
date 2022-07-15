import { Action } from '../actions/repositories';
import { REPOSITORIES_ACTION_TYPES } from '../action.types/repositories';

interface RepositoriesState {
  isLoading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case REPOSITORIES_ACTION_TYPES.SEARCH_REPOSITORIES:
      return { isLoading: true, error: null, data: [] };
    case REPOSITORIES_ACTION_TYPES.SEARCH_REPOSITORIES_SUCESS:
      return { isLoading: false, error: null, data: action.payload };
    case REPOSITORIES_ACTION_TYPES.SEARCH_REPOSITORIES_ERROR:
      return { isLoading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
