import { Provider } from 'react-redux';
import { searchRepositories } from './store/actions/repositories';
import { store } from './store/index';
import Repository from './components/Repository';

function App() {
  searchRepositories('react');

  return (
    <Provider store={store}>
      <Repository />
    </Provider>
  );
}

export default App;
