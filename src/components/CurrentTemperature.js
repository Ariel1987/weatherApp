import { useEffect, useState } from "react"
import useUrlByLocation from "../hooks/useUrlByLocation"

const CurrentTemperature = () => {
    const [currentTemperature, setCurrentTemperature] = useState()
    const [currentWeather, setCurrentWeather] = useState()
    const [currentMinTemp, setCurrentMinTemp] = useState()
    const [currentMaxTemp, setCurrentMaxTemp] = useState()
    const [currentWind, setCurrentWind] = useState()
    const [currentHumidity, setCurrentHumidity] = useState()

    const url = useUrlByLocation()

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            }).then(function (res) {
                setCurrentTemperature(Math.round(res.main.temp - 273.15))
                setCurrentMinTemp(Math.round(res.main.temp_min - 273.15))
                setCurrentMaxTemp(Math.round(res.main.temp_max - 273.15))
                setCurrentWeather(res.weather[0].main)
                setCurrentWind(Math.round(res.wind.speed * 3.6))
                setCurrentHumidity(res.main.humidity)
            });
    }, [url]);

    return (
        <div>
            <h1>{currentTemperature}ºC</h1>
            <p>{currentWeather}</p>
            <p>Min: {currentMinTemp}ºC</p>
            <p>Max: {currentMaxTemp}ºC</p>
            <p>{currentWind}km/h</p>
            <p>{currentHumidity}%</p>
        </div>
    )
}

export default CurrentTemperature