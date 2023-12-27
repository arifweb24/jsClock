let hr = document.querySelector("#hh");
let mn = document.querySelector("#mm");
let sc = document.querySelector("#ss");

setInterval(() =>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    const seconds = now.getSeconds();
    let ss = (seconds + now.getMilliseconds() / 1000) * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm+(ss/60)}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    //Digital Clock
    let dh = document.getElementById("dh");
    let dm = document.getElementById("dm");
    let ds = document.getElementById("ds");
    let ampm = document.getElementById("ap");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = (h >= 12) ? "PM" : "AM";

    if(h > 12){
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    dh.innerHTML = h;
    dm.innerHTML = m;
    ds.innerHTML = s;
    ampm.innerHTML = ap;
})
