const formatTime = (now) => {
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hour = now.getHours()

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    return hour + ":" + minutes + ":" + seconds
}

export default formatTime
