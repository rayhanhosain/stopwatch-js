let second = 0
let minute = 0
let hour = 0
let interval
let fullTimeDiv = document.querySelector('.full-time')
let secondDiv = document.querySelector('.second')
let minuteDiv = document.querySelector('.minute')
let hourDiv = document.querySelector('.hour')

let startPauseBtn = document.querySelector('.start-pause-btn')
let resetBtn = document.querySelector('.reset')

startPauseBtn.addEventListener('click', ()=> {
  if (startPauseBtn.innerText === "Start") {
    startPauseBtn.innerText = "Pause"
   interval = window.setInterval(()=> {
      console.log('click')
      second++
      
      if (second/60 === 1 ) {
        second= 0
        minute++
        minuteDiv.innerText = minute < 10 ? "0" + minute : minute
    
        if (minute/60 === 1) {
          minute = 0
          hour++
          hourDiv.innerText = hour < 10 ? "0" + hour : hour
        }
      }
     
      secondDiv.innerText = second < 10 ? "0" + second : second
    }, 1000)
    startPauseBtn.classList.add('pause')
  } else {
    startPauseBtn.innerText = "Start"
    window.clearInterval(interval)
    startPauseBtn.classList.remove('pause')
    
  }

})

resetBtn.addEventListener('click', ()=> {
  second = 0
  minute = 0
  hour = 0
  secondDiv.innerText = "00"
  minuteDiv.innerText = "00"
  hourDiv.innerText = "00"
  startPauseBtn.innerText = "Start"
  window.clearInterval(interval)
  startPauseBtn.classList.remove('pause')
})