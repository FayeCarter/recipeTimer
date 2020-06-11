let doc = document.body.innerHTML

function highlightTime (){
  document.body.innerHTML = doc.replace(/(minutes)|(minute)|(mins)|(min)|(hours)|(hour)/gi, `<span style='background-color:rgba(255,0,0,0.3);'>$1$2$3$4$5$6</span>`)
}

window.onload = highlightTime();
