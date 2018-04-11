const initialState = {
  items: [],
  loading: false,
  error: null,
  itemCount: 0,
  itemFilter: "all"
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
