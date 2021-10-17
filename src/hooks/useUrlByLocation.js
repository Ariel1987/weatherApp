import useCurrentLocation from "./useCurrentLocation";

const useUrlByLocation = () => {
    const location = useCurrentLocation()
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='
        + Math.round(location.coordinates.lat)
        + '&lon='
        + Math.round(location.coordinates.long)
        + '&appid=9e1e5c0efc11947963b5b17b841dca86'

    return url
}


export default useUrlByLocation