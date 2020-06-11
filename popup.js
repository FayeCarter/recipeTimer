document.addEventListener('DOMContentLoaded', function () {

  let time = new Date();
  let mid = new Date();
  let end = new Date();
  let getTime = document.getElementById('get-times');
  let endTime = document.getElementById("end-time")

  document.querySelector('#now').innerHTML = time.toLocaleTimeString()

  getTime.addEventListener('click', onclick, false)

  function onclick () {
    
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      addMinutes(request.time)
      endTime.innerHTML = end.toLocaleTimeString()
    })
  }

  function addMinutes (minutes) {
    currentMinutes = mid.getMinutes()
    newMinutes = (currentMinutes + minutes)
    end.setMinutes(newMinutes)
    return end
  }

}, false)