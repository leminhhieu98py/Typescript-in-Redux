import { Provider } from 'react-redux';
import { searchRepositories } from './store/actions/repositories';
import { store } from './store/index';

function App() {
  searchRepositories('react');

  return (
    <Provider store={store}>
      <div className="App">Hello world</div>
    </Provider>
  );
}

export default App;
