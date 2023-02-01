const hourEl = document.getElementById("hour");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


function clockUpdate(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12) {
        h = h - 12
        ampm = "PM"
    }
    
     h = h < 10? "0" + h : h;
     m = m < 10? "0" + m : m;
     s = s < 10? "0" + s : s;

    hourEl.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    ampmEl, (innerHTML = ampm);
    setTimeout( () => {
        clockUpdate()
    },1000)

}

clockUpdate()