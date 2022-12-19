
const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const milisecTag = document.getElementsByClassName("milisec")[0];
const startButton = document.getElementsByClassName("start")[0];
const pauseButton = document.getElementsByClassName("pause")[0];
const continueButton = document.getElementsByClassName("continue")[0];
const restartButton = document.getElementsByClassName("restart")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const markButton = document.getElementsByClassName("mark")[0];
const flagContainer = document.getElementsByClassName("flag")[0];


let milisec=0;second=0;minute=0;hour=0;

const insertTimerText = () =>{
    const milisecText = milisec < 10 ? "0" + milisec.toString(): milisec;
    const secondText = second < 10 ? "0" + second.toString(): second;
    const minuteText = minute < 10 ? "0" + minute.toString(): minute;
    const hourText = hour < 10 ? "0" + hour.toString(): hour;
    milisecTag.textContent= milisecText;
    return stopWatchTag.textContent=hourText+ ":" +minuteText + ":" +secondText;
    
    
}

const startingTime = () => {
    milisec+=1;
    if(milisec===100){
        milisec=0;
        second+=1;
        if(second===60){
            second=0;
            minute+=1;
            if(minute===60){
                minute=0;
                hour+=1;
            }
        }
    }
   insertTimerText(); 
}
let intervalId;
startButton.addEventListener("click",()=>{
    clearInterval(intervalId);
    intervalId = setInterval(startingTime,10);
    
});
pauseButton.addEventListener("click",()=>{
    clearInterval(intervalId);
});
continueButton.addEventListener("click",()=>{
    clearInterval(intervalId);
    intervalId = setInterval(startingTime,10);
});
restartButton.addEventListener("click",()=>{
    [milisec,second,minute,hour]=[0,0,0,0];
    clearInterval(intervalId);
    intervalId = setInterval(startingTime,10);
});
resetButton.addEventListener("click",()=>{
    [milisec,second,minute,hour]=[0,0,0,0];
    clearInterval(intervalId);
    insertTimerText();
});
markButton.addEventListener("click",()=>{

    let markdiv = document.createElement("div");
    markdiv.classList.add("marking_container");

    const secondText = second < 10 ? "0" + second.toString(): second;
    const minuteText = minute < 10 ? "0" + minute.toString(): minute;
    const hourText = hour < 10 ? "0" + hour.toString(): hour;

    markdiv.textContent=hourText+ ":" +minuteText + ":" +secondText;
    flagContainer.append(markdiv);



})