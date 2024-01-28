
// let min = 24;
// let sec = 60;
// let minheading = document.getElementById('min');
// let secheading = document.getElementById('sec');
// let startButton = document.getElementById('start');
// let interval;
// function timer(){
//     sec--;
//     secheading.innerHTML=sec
//     if(sec == 0){

//         min--;
//         minheading.innerHTML = min;
//         sec=59
//     }
    
// }
// function start(){
//     interval=setInterval(timer,1000);
//     startButton.disabled = true;
    
    
// }
// function stop(){
//     clearInterval(interval)
//     startButton.disabled = false;
// }
// function reset(){
//     min = 24;
//     sec = 59;
//     minheading.innerHTML = min;
//     secheading.innerHTML = sec;
//     stop();
//     startButton.disabled = false; 

// }
let min = 25;
let sec = 0;
let minheading = document.getElementById('min');
let secheading = document.getElementById('sec');
let startButton = document.getElementById('start');
let interval;

function timer() {
    sec--;
    secheading.innerHTML = sec;

    if (sec == 0) {
        min--;
        minheading.innerHTML = min;
        sec = 59;
    }
}

function start() {
    // Reset timer values
    min = 24;
    sec = 59;

    // Update HTML content
    minheading.innerHTML = min;
    secheading.innerHTML = sec;

    // Start the interval
    interval = setInterval(timer, 1000);
    startButton.disabled = true;
}

function stop() {
    clearInterval(interval);
    startButton.disabled = false;
}

function reset() {
    min = 24;
    sec = 59;
    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    stop();
    startButton.disabled = false;
}
