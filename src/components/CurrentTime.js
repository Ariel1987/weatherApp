import { useEffect, useState } from "react"

const now = new Date()
let seconds = now.getSeconds()
let minutes = now.getMinutes()
let hour = now.getHours()

if (seconds < 10) {
    seconds = "0" + seconds
}
if (minutes < 10) {
    minutes = "0" + minutes
}
const time = hour + ":" + minutes + ":" + seconds

const CurrentTime = () => {
    const [localTime, setLocalTime] = useState(time)

    useEffect(() => {
        const interval = setInterval(() => setLocalTime(time), 1000)
        clearInterval(interval)
    }, [localTime])

    return <p>{localTime}</p>
}

export default CurrentTime