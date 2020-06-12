document.addEventListener('DOMContentLoaded', function () {

  let time = new Date();
  let end = new Date();
  let endTime = document.getElementById("end-time")

  document.querySelector('#now').innerHTML = time.toLocaleTimeString()

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      addMinutes(request.time)
      endTime.innerHTML = end.toLocaleTimeString()
    }
  );

  function addMinutes (minutes) {
    currentTime = time.getMinutes()
    newTime = (currentTime + minutes)
    end.setMinutes(newTime)
    return end
  }

}, false)