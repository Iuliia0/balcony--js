const timer = (deadline) => {
  const orders = document.querySelectorAll('.order')
  orders.forEach(order => {
    const timerDays = order.querySelector('.count_1 span')
    const timerHours = order.querySelector('.count_2 span')
    const timerMinutes = order.querySelector('.count_3 span')
    const timerSeconds = order.querySelector('.count_4 span')
    let timeId

    const getTimeRemaining = () => {
      let dateStop = new Date(deadline).getTime()
      let dateNow = new Date().getTime()
      let timeRemaining = (dateStop - dateNow) / 1000
      let days = Math.floor(timeRemaining / 60 / 60 / 24) 
      let hours = Math.floor(timeRemaining / 60 / 60)
      let minutes = Math.floor((timeRemaining / 60) % 60)
      let seconds = Math.floor(timeRemaining % 60)
      return { timeRemaining, days, hours, minutes, seconds }
    }

    const addZero = (num) =>  {
      if (num < 10) {
        return num = '0' + num
      } else {
        return num
      }
    }

    const updateClock = () => {
      let getTime = getTimeRemaining()
      if (getTime.timeRemaining > 0) {
        timerDays.textContent = addZero(getTime.days)
        timerHours.textContent = addZero(getTime.hours)
        timerMinutes.textContent = addZero(getTime.minutes)
        timerSeconds.textContent = addZero(getTime.seconds)
      } else {
        timerDays.textContent = '00'
        timerHours.textContent = '00'
        timerMinutes.textContent = '00'
        timerSeconds.textContent = '00'
        clearInterval(timeId)
      }
    }
    updateClock()
    timeId = setInterval(updateClock, 1000)
    })


}

export default timer