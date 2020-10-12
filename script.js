const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')

const myBirthday = '25 March 2021'

function countdown() {
   const myBirthdayDate = new Date(myBirthday);
   const currentDate = new Date();

   const getSeconds = (myBirthdayDate - currentDate) / 1000
   const days = Math.floor(getSeconds / 3600 / 24)
   const hours = Math.floor(getSeconds  / 3600) % 24
   const minutes = Math.floor(getSeconds  / 60)  % 60
   const seconds = Math.floor(getSeconds) % 60

   daysElement.innerHTML = days
   hoursElement.innerHTML = formatTime(hours)
   minutesElement.innerHTML = formatTime(minutes)
   secondsElement.innerHTML = formatTime(seconds)

}
countdown();

setInterval(countdown, 1000)

function formatTime(time) {
   return time < 10 ? `0${time}` : time
}