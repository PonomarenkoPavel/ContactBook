import React, { useState, useCallback, useRef } from 'react';
import { InputComponent } from 'components/Input';
import { useDispatch } from 'react-redux';
import { startSearch } from 'ducks/search/actions';

/**
 * Displays search line
 */
export const Search = () => {
  const [searchString, setSearchString] = useState('');
  const timer = useRef(null);
  const dispatch = useDispatch();
  const handleChange = useCallback(
    ({ target }) => {
      const partOfName = target.value;
      setSearchString(partOfName);
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
      timer.current = setTimeout(() => {
        dispatch(startSearch(partOfName));
        timer.current = null;
      }, 500);
    },
    [setSearchString],
  );

  return (
    <InputComponent
      value={searchString}
      handleChange={handleChange}
      id="search"
      placeholder="Search"
    />
  );
};
