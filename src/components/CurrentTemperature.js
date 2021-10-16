import { useEffect, useState } from "react"

const CurrentTemperature = () => {
    const [currentTemperature, setCurrentTemperature] = useState()
    const [currentWeather, setCurrentWeather] = useState()
    const [currentMinTemp, setCurrentMinTemp] = useState()
    const [currentMaxTemp, setCurrentMaxTemp] = useState()
    const [currentWind, setCurrentWind] = useState()
    const [currentHumidity, setCurrentHumidity] = useState()
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: '', long: '' }
    })
    const [localTime, setLocalTime] = useState()


    useEffect(() => {
        setLocalTime(Date().toLocaleString())
    }, [])

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                long: location.coords.longitude
            }
        })
    }

    const onError = error => {
        setLocation({
            loaded: true,
            error,
        })
    }

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation not supported'
            })
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])

    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + Math.round(location.coordinates.lat) + '&lon=' + Math.round(location.coordinates.long) + '&appid=9e1e5c0efc11947963b5b17b841dca86').then(res => {
            return res.json();
        }).then(function (res) {
            setCurrentTemperature(Math.round(res.main.temp - 273.15))
            setCurrentMinTemp(Math.round(res.main.temp_min - 273.15))
            setCurrentMaxTemp(Math.round(res.main.temp_max - 273.15))
            setCurrentWeather(res.weather[0].main)
            setCurrentWind(Math.round(res.wind.speed * 3.6))
            setCurrentHumidity(res.main.humidity)
        });
    }, [location.coordinates.lat, location.coordinates.long]);    
 
    return (
        <div>
            <h1>{currentTemperature}ºC</h1>
            <p>{currentWeather}</p>
            <p>Min: {currentMinTemp}ºC</p>
            <p>Max: {currentMaxTemp}ºC</p>
            <p>{currentWind}km/h</p>
            <p>{currentHumidity}%</p>
            <p>{localTime}</p>
        </div>
    )
}

export default CurrentTemperature