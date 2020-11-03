const PREFIX = 'search';

export const START_SEARCH = `${PREFIX}/START_SEARCH`;
export const startSearch = searchString => ({
  type: START_SEARCH,
  searchString,
});

export const END_SEARCH = `${PREFIX}/END_SEARCH`;
export const endSearch = foundContactIds => ({
  type: END_SEARCH,
  foundContactIds,
});
