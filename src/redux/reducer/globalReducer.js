import { TOGGLE_SIDEBAR } from "../type"

const initialState = {
  sidebarShow: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarShow: !state.sidebarShow }

    default: return state
  }
}

export default reducer