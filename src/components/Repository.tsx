import React, { useRef } from 'react';
import { useDispatchAction } from '../hooks/useDispatchAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Repository = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { data, isLoading, error } = useTypedSelector(
    (state) => state.repositories
  );

  const { searchRepositories } = useDispatchAction();
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchText = inputRef.current?.value;
    if (searchText) {
      searchRepositories(searchText);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input
          ref={inputRef}
          type="text"
          placeholder="What is the name of package?"
        />
        <button type="submit">{isLoading ? 'Searching...' : 'Search'}</button>
        {error && <h3>{error}</h3>}
        {!error && !isLoading && data && (
          <ul>
            {data.map((packageName) => (
              <li key={packageName}>{packageName}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default Repository;
