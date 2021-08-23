import { TOGGLE_SIDEBAR } from "../type"

const isToggleSidebar = (dispatch) => {
  const action = { type: TOGGLE_SIDEBAR };
  dispatch(action);
}

export { isToggleSidebar }