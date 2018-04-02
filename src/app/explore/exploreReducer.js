const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function exploreReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ITEMS_BEGIN":
      return { ...state, loading: true, error: null };
    case "FETCH_ITEMS_SUCCESS":
      return { ...state, loading: false, items: action.payload.items };
    case "FETCH_ITEMS_ERROR":
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}