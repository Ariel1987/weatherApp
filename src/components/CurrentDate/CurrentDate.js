import { useEffect, useState } from 'react'
import formatDate from '../../utils/formatDate'

const CurrentDate = () => {
    const [localDate, setLocalDate] = useState(formatDate(new Date()))

    const getDate = () => {
        const now = new Date()
        return formatDate(now)
    }

    useEffect(() => {
        setLocalDate(getDate())
    }, [])

    return (<p>{localDate}</p>)
}

export default CurrentDate