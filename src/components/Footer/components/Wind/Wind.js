import { useEffect, useState } from "react"
import useCurrentTemperature from "@/hooks/useCurrentTemperature"

const Wind = () => {
    const [wind, setWind] = useState()
    const currentTemperature = useCurrentTemperature()

    useEffect(() => {
        setWind(currentTemperature.currentWind)
    }, [currentTemperature])

    return (
        <div>
            <img src="./icons/wind.png" alt="sunny-cloudy" />
            <p>{wind} km/h</p>
        </div>
    )
}

export default Wind