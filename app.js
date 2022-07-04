function watch() {
   const date = new Date()
   const hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
   const  minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
   document.querySelector('.watch').innerHTML = hours + ':' + minutes
   const sinse = document.querySelector(`.sinse`)
   const dateyears = new Date()
   const dateUTC = (dateyears.getFullYear());
   document.querySelector('.date').innerHTML =   dateUTC;

}
setInterval(watch, 1000);