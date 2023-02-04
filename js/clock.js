
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let tictok=new Audio('./audio/tic_tok.wav');
// let tictok=new Audio('audio/tic_tok.wav');


setInterval(() => {
    tictok.play();
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    let h = (30 * htime) + mtime / 2;
    let m = 6 * mtime;
    let s = 6 * stime;

    hour.style.transform = `rotate(${h - 180}deg)`;
    min.style.transform = `rotate(${m - 180}deg)`;
    sec.style.transform = `rotate(${s - 180}deg)`;
}, 1000)