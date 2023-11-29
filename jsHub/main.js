// 
let minutes = 0;
let seconds = 0;
let part = 0;

//control buttons
const start_btn =document.getElementById('start-btn');
const stop_btn =document.getElementById('stop-btn');
const reset_btn =document.getElementById('reset-btn');


const watch = document.getElementById('watch');
let id = 0;

// To start or resume running the watch
start_btn.addEventListener('click',()=>{
    reset_btn.style.cssText = 'display:none !important;';
    
    function start() {
        start_btn.style.cssText = 'display:none !important;';
        stop_btn.style.cssText = 'display: block !important;';
        
        if(part == 100){
            part = 0;
            seconds++;
        }
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }


        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        const formattedPart = part < 10 ? `0${part}` : `${part}`;

        // Update the watch element's innerHTML once with the formatted values
        watch.innerHTML = `${formattedMinutes}:${formattedSeconds}.${formattedPart}`;
        part++; 
     }

    id = window.setInterval(start,10);
});

// To pause the watch
stop_btn.addEventListener('click',()=>{
    stop_btn.style.display = 'none';
    start_btn.style.display ='block';
    start_btn.innerHTML = 'Resume';
    reset_btn.style.cssText = 'display:block !important;';
    clearInterval(id);
});

// To reset the time
reset_btn.addEventListener('click',()=>{
 minutes = seconds = part = 0;
 watch.innerHTML = "00:00.00";

 reset_btn.style.display = 'none';
 start_btn.innerHTML ="Start";
 start_btn.style.display = 'block';
});

