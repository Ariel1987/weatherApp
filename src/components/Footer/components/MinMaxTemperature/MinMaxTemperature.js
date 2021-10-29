import { useEffect, useState } from "react"
import useCurrentTemperature from "@/hooks/useCurrentTemperature"

const MinMaxTemperature = () => {
    const [minTemperature, setMinTemperature] = useState()
    const [maxTemperature, setMaxTemperature] = useState()
    const currentTemperature = useCurrentTemperature()

    useEffect(() => {
        setMinTemperature(currentTemperature.currentMinTemp)
        setMaxTemperature(currentTemperature.currentMaxTemp)
    }, [currentTemperature])

    return (
        <div>
            <img src='./icons/termometro.png' alt='termometro' />
            <p>min {minTemperature}º</p>
            <p>max {maxTemperature}º</p>
        </div>
    )
}

export default MinMaxTemperature