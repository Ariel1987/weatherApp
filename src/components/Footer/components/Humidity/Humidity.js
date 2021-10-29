import { useEffect, useState } from "react"
import useCurrentTemperature from "@/hooks/useCurrentTemperature"

const Humidity = () => {
    const [humidity, setHumidity] = useState()
    const currentTemperature = useCurrentTemperature()

    useEffect(() => {
        setHumidity(currentTemperature.currentWind)
    }, [currentTemperature])

    return (
        <div>
            <img src="./icons/humidity.png" alt="sunny-cloudy" />
            <p>{humidity}%</p>
        </div>
    )
}

export default Humidity