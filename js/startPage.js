const hourDisplay = document.getElementById('hours')
const periodDisplay = document.getElementById('period')

function setTime() {
  const time = new Date()
  const fullTime = time.toLocaleTimeString('en-US').split(' ')
  const hours = `${fullTime[0]}`
  const period = fullTime[1]
  hourDisplay.innerHTML = hours
  periodDisplay.innerHTML = period
}

setInterval(setTime, 1000)

setTime()
