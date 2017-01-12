export const SEARCH = "SEARCH";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const search = keywords => ({
  type: SEARCH,
  keywords
});

export const receiveSearchResults = ({results, keywords}) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results,
  keywords
});
