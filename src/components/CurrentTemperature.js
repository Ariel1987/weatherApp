import { useEffect, useState } from "react"
import useGeoLocation from 'react-hook-geolocation'

const CurrentTemperature = () => {
    const [currentTemperature, setCurrentTemperature] = useState()

    const geolocation = useGeoLocation()

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=-23.36&lon=-46.36&appid=9e1e5c0efc11947963b5b17b841dca86').then(res => {
            return res.json();
        }).then(function (res) {
            setCurrentTemperature(Math.round(res.main.temp - 273.15))
        });
    }, []);

    return (
        <div>
            <h1>{currentTemperature}ºC</h1>
        </div>
    )
}

export default CurrentTemperature