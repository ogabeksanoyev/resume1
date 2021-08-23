import { getWeather } from "../../api"
import { SET_WEATHER } from "../type";

const setWeather = async (dispatch) => {
  const res = await getWeather();
  if (res.success) {
    const action = { type: SET_WEATHER, payload: res.data };
    dispatch(action)
  }
  else {

  }
}

export { setWeather }