let doc = document.querySelector(".recipe-details__text").innerHTML
let highlight = `<span style='background-color:rgba(255,0,0,0.3);'>$1$2$3</span>`
let minutes = 0;
let hours = 0;

function highlightTime (){
  document.querySelector(".recipe-details__text").innerHTML = doc.replace(/(mins)|(hours)|(hour)/gi, highlight)
  logTime()
}

function logTime () {
  let prep = document.querySelector(".recipe-details__cooking-time-prep").innerText
  let cook = document.querySelector(".recipe-details__cooking-time-cook").innerText
  let extra = document.querySelector(".recipe-details__cooking-time-full").innerText

  let timing = {
    "Prep": timeHash(prep),
    "Cook": timeHash(cook),
    "Extra": timeHash(extra)
  }
  console.log(timing)
  console.log(`${hours} hours, ${minutes} minutes`)
}

function timeHash (string) {
  let newTime = {}
  let time = string.replace( /[^\d\.]*/g, '')

  if(string.includes("MINS")) {
    newTime["minutes"] = parseInt(time)
    newTime["hrs"] = 0
  } 
  if(string.includes("hrs")) {
    newTime["hrs"] = parseInt(time)
    newTime["minutes"] = 0
  }
  
  totalTime(newTime)
  return newTime
}

function totalTime (object) {
  minutes += object.minutes
  hours += object.hrs
}

window.onload = highlightTime();
