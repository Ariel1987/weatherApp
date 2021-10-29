import { useEffect, useState } from "react"
import useCurrentLocation from "./useCurrentLocation"
import createUrlByLocation from "../utils/createUrlByLocation"

const useCurrentTemperature = () => {
    const [currentTemperatureData, setCurrentTemperatureData] = useState({
        currentTemperature: '00',
        currentWeather: '00',
        currentMinTemp: '00',
        currentMaxTemp: '00',
        currentWind: '00',
        currentHumidity: '00',
    })

    const location = useCurrentLocation()

    useEffect(() => {
        if (location.loaded) {
            const url = createUrlByLocation(location.coordinates.lat, location.coordinates.long)
            fetch(url)
                .then(res => {
                    return res.json()
                }).then(function (res) {
                    setCurrentTemperatureData({
                        currentTemperature: Math.round(res.main.temp - 273.15),
                        currentWeather: res.weather[0].main,
                        currentMinTemp: Math.round(res.main.temp_min - 273.15),
                        currentMaxTemp: Math.round(res.main.temp_max - 273.15),
                        currentWind: Math.round(res.wind.speed * 3.6),
                        currentHumidity: res.main.humidity,
                    })
                })
        }
    }, [location])
    
    return currentTemperatureData

}

export default useCurrentTemperature