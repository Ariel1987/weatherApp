import { useEffect, useState } from "react"
import { useForecast } from '@/context/forecast'
const Wind = () => {
    const { state } = useForecast()
    const [wind, setWind] = useState(null)

    useEffect(() => {
        if (state.data && !state.error) {
            setWind(state.data.wind.speed)
        }
    }, [state])
    return (
        <div>
            <img src="./icons/wind.png" alt="sunny-cloudy" />
            <p>{wind} km/h</p>
        </div>
    )
}

export default Wind