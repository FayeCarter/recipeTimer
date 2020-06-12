let minutes = 0;

(function calculateTime () {
  let prep = document.querySelector(".recipe-details__cooking-time-prep")
  let cook = document.querySelector(".recipe-details__cooking-time-cook")
  let extra = document.querySelector(".recipe-details__cooking-time-full")

  timeHash(prep),
  timeHash(cook),
  timeHash(extra)

  chrome.runtime.sendMessage({
    "time": minutes
  });
})()




function timeHash (html) {
  if (html !==null ) {
    text = html.innerText
    let time = text.replace( /[^\d\.]*/g, '')
  
    if(text.includes("MINS")) {
      minutes += parseInt(time)
    } 
    if(text.includes("hrs")) {
      minutes += parseInt(time * 60)
    }
  }
  return minutes
}

// window.onload = calculateTime();
