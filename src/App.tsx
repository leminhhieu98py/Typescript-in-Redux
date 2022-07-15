import { searchRepositories } from './store/actions/repositories';

function App() {
  searchRepositories('react');

  return <div className="App">Hello world</div>;
}

export default App;
