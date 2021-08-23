import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../container/Container/'
import { setWeather } from '../../redux/action/weatherAction'
import WeatherWeapper from './WeatherWrapper'
const Weather = () => {
  const weather = useSelector(state => state.users.weather);
  console.log(weather);
  const dispatch = useDispatch();
  useEffect(() => {
    setWeather(dispatch)
  }, [])
  return (
    <WeatherWeapper>
      <Container>
        <div className="main_container">
          <div className="search">
            <input type="text" placeholder="Wearher search..." className="w_search" />
          </div>
        </div>
      </Container>
    </WeatherWeapper>
  )
}

export default Weather
