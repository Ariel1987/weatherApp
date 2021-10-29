import { useEffect, useState } from 'react'
import useCurrentTemperature from '../../hooks/useCurrentTemperature'
import { Wrapper } from './CurrentTemperature.styles'

const CurrentTemperature = () => {
  const [temperature, setTemperature] = useState()
  const [weather, setWeather] = useState()
  const currentTemperature = useCurrentTemperature()

  useEffect(() => {
    setTemperature(currentTemperature.currentTemperature)
    setWeather(currentTemperature.currentWeather)
  }, [currentTemperature])

  return (
    <Wrapper>
      <img src="./icons/sunny-cloudy.png" alt="sunny-cloudy" />
      <h1>{temperature}ºC</h1>
      <p>{weather}</p>
    </Wrapper>
  )
}

export default CurrentTemperature
