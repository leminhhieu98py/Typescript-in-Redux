import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../store';

export const useDispatchAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreator, dispatch);
};
