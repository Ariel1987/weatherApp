import { useEffect, useState } from "react"
import { useForecast } from '@/context/forecast'
const Humidity = () => {
  const { state } = useForecast()
  const [humidity, setHumidity] = useState(null)

  useEffect(() => {
    if (state.data && !state.error) {
      setHumidity(state.data.main.humidity)
    }
  }, [state])

  return (
    <div>
      <img src="./icons/humidity.png" alt="sunny-cloudy" />
      <p>{humidity}%</p>
    </div>
  )
}

export default Humidity