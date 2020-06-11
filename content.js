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

  timeHash(prep),
  timeHash(cook),
  timeHash(extra)

  chrome.runtime.sendMessage({
    "time": minutes
  });
}

function timeHash (string) {
  let time = string.replace( /[^\d\.]*/g, '')

  if(string.includes("MINS")) {
    minutes += parseInt(time)
  } 
  if(string.includes("hrs")) {
    minutes += parseInt(time * 60)
  }
  return minutes
}

window.onload = highlightTime();
