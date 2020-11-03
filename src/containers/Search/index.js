import React, { useState, useCallback } from 'react';
import { SearchComponent } from 'components/Search';
import { useDispatch } from 'react-redux';
import { startSearch } from 'ducks/search/actions';

/**
 * Search line container
 */
export const Search = () => {
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();
  const handleChange = useCallback(
    ({ target }) => {
      setSearchString(target.value);
    },
    [setSearchString],
  );
  const handleKeyPress = useCallback(
    ({ key }) => {
      if (!(key === 'Enter')) {
        return;
      }
      dispatch(startSearch(searchString));
    },
    [dispatch, searchString],
  );

  return (
    <SearchComponent
      value={searchString}
      handleChange={handleChange}
      handleKeyPress={handleKeyPress}
    />
  );
};
