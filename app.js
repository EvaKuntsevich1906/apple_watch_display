function watch(){
    let date = new Date()
         let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
         let  minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
         document.querySelector('.watch').innerHTML = hours + ':' + minutes
}
setInterval(watch, 1000);

function date () {
   let  dateyears = new Date ()
   let dateUTC =  (dateyears.getFullYear())
   document.querySelector('.date').innerHTML = `since.` + dateUTC
}
setInterval(date, 1000);