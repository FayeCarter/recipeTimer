let doc = document.querySelector(".recipe-details__text").innerHTML
let highlight = `<span style='background-color:rgba(255,0,0,0.3);'>$1$2$3</span>`

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
    "cook": timeHash(cook),
    "extra": timeHash(extra)
  }

  console.log(timing)
}

function timeHash (string) {
  let newTime = {}
  let time = string.replace( /[^\d\.]*/g, '')

  if(string.includes("MINS")) {
    newTime["minutes"] = parseInt(time)
  } else if(string.includes("hrs")) {
    newTime["hrs"] = parseInt(time)
  }
  return newTime
}

window.onload = highlightTime();
