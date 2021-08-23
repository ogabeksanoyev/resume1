import { SET_WEATHER } from "../type";

const initialState = {
  weather: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return { ...state, weather: action.payload }


    default: return state
  }
}

export default reducer