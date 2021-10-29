import React, { useEffect, useState } from 'react'
import useCurrentLocation from '@/hooks/useCurrentLocation'
import createUrlByLocation from '@/utils/createUrlByLocation'
import { LOADING, LOADING_ENDED, useLoading } from '../../../../context/context-loading'

const CurrentLocation = () => {
  const [city, setCity] = useState()
  const location = useCurrentLocation()
  const { state, dispatch } = useLoading()

  useEffect(() => {
    console.log(state)
    dispatch({ type: LOADING })
    if (location.loaded) {
      const url = createUrlByLocation(
        location.coordinates.lat,
        location.coordinates.long,
      )
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setCity(res.name)
          dispatch({ type: LOADING_ENDED })
        })
    }
  }, [location])

  return <p>{city}</p>
}

export default CurrentLocation
