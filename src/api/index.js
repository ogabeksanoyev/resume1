import axios from "axios"


const getWeather = async () => {
  try {
    const res = await axios.get("https://rapidapi.com/weatherapi/api/weatherapi-com/");
    return { success: true, data: res.data }
  } catch (error) {
    console.error(Error);
    return { success: false }
  }
}

export { getWeather }