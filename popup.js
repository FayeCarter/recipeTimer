document.addEventListener('DOMContentLoaded', function () {

  var currentTime = new Date().toLocaleTimeString();

  document.querySelector('#now').innerHTML = currentTime

}, false)