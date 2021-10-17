import { useEffect, useRef, useState } from 'react'
import formatTime from '../utils/formatTime'

const CurrentTime = () => {
    const [localTime, setLocalTime] = useState(formatTime(new Date()))
    const intervalRef = useRef()

    const getTime = () => {
        const now = new Date()
        return formatTime(now)
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setLocalTime(getTime())
        }, 1000)
        return () => clearInterval(intervalRef.current)
    }, [])

    return (
        <>
            <p>{localTime}</p>
            <button onClick={() => {
                console.log(intervalRef.current)
                clearInterval(intervalRef.current)
            }}>
                Para o relógio
            </button>
        </>
    )
}

export default CurrentTime