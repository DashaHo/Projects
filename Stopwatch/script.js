var startStop = document.getElementsByClassName('startStop')[0],
    minutes = document.getElementsByClassName('minutes')[0],
    seconds = document.getElementsByClassName('seconds')[0],
    milliseconds = document.getElementsByClassName('milliseconds')[0],
    stopwatch = document.getElementsByClassName('stopwatch')[0],
    conteiner = document.getElementsByClassName('conteiner')[0];

var start = document.getElementById('start'),
    reset = document.getElementById('reset'),
    save = document.getElementById('save');

var buttons = document.getElementsByTagName('button'),
    p = document.getElementsByTagName('p');


var min1=0,
    sec1=0,
    ms1=0,
    min2=0,
    sec2=0,
    ms2=0,
    interval;

startStop.addEventListener('click', startTimer);

function startTimer(){
    var state = stopwatch.dataset.state;

    if(state == 'initial'){
        stopwatch.dataset.state = 'running';
        startStop.innerHTML='Stop';
        interval = setInterval(timer, 10);
    }

    if(state == 'running'){
        stopwatch.dataset.state = 'stopped';
        startStop.innerHTML='Run';
        clearInterval(interval);
    }

    if(state == 'stopped'){
        stopwatch.dataset.state = 'running';
        startStop.innerHTML='Stop';
        interval = setInterval(timer, 10);
    }

    reset.innerHTML = '<button>Reset</button>';
    save.innerHTML = '<button>Save</button>';

    buttons[1].classList.add('reset');
    buttons[2].classList.add('save');
}

function timer(){
    ms1 ++;

    if(ms1<10){
        ms2='0'+ms1;
    } else {
        ms2=ms1;
    }

    milliseconds.innerHTML = ms2;

    if(ms1 == 100){
        ms1 = 0;
        sec1 ++;
        

        if(sec1<10){
            sec2='0'+sec1;
        } else {
            sec2=sec1;
        }

        seconds.innerHTML = sec2;
        milliseconds.innerHTML='00';
    }

    if(sec1 == 60){
        sec1 = 0;
    
        min1 ++;


        if(min1<10){
            min2='0'+min1;
        } else {
            min2=min1;
        }

        minutes.innerHTML = min2;
        seconds.innerHTML = '00';
    }

    if(min1 == 60){
        clearInterval(interval);
        seconds.innerHTML = '00';
        milliseconds.innerHTML = '00';

        save.innerHTML='';

        start.classList.add('change');

        reset.addEventListener('click', stopTimer2);
    }
}

reset.addEventListener('click', stopTimer1);

function stopTimer1(){
    clearInterval(interval);
    startValue();

    for(var i=0; i<p.length; i++){
        p[i].innerHTML='';
    }

    reset.innerHTML='';
    save.innerHTML='';
    startStop.innerHTML='Start';

    state = stopwatch.setAttribute('data-state', 'initial');

    start.classList.remove('change');

    startStop.addEventListener('click', startTimer);
}

function stopTimer2(){

    reset.innerHTML='';
    save.innerHTML='';

    startStop.innerHTML='Start';

    state = stopwatch.setAttribute('data-state', 'initial');

    start.classList.remove('change');

    startStop.addEventListener('click', startTimer);
}

function startValue(){
    minutes.innerHTML='00';
    seconds.innerHTML='00';
    milliseconds.innerHTML='00';
    ms1 = 0;
    sec1 = 0;
    min1 = 0;
}

save.addEventListener('click', saveValue);

function saveValue(){
    var p = document.createElement('p');

    if (min2<1){
        p.innerHTML ="0"+ min2 + ":" + sec2 + ":" + ms2;
        conteiner.append(p);
    } if(min2>=1){
        p.innerHTML = min2 + ":" + sec2 + ":" + ms2;
        conteiner.append(p);
    }
}
