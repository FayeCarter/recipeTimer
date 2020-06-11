let doc = document.querySelector(".recipe-details__text").innerHTML
let highlight = `<span style='background-color:rgba(255,0,0,0.3);'>$1$2$3</span>`

function highlightTime (){
  document.querySelector(".recipe-details__text").innerHTML = doc.replace(/(mins)|(hours)|(hour)/gi, highlight)
}

window.onload = highlightTime();

