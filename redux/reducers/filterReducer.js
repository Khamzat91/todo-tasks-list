
const initialState = {
  filterBay: 'all'
}

function filterReducer (state = initialState, action) {
  if (action.type === 'SET_FILTER') {
    return {
      ...state,
      filterBay: action.payload
    }
  }
  return state
}

export default filterReducer;