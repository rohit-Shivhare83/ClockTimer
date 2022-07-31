const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

var hr = 00;
var min = 00;
var sec = 00;
var count = 00;
var timer = false;

start.addEventListener("click", startFun);
function startFun() {
  timer = true;
  stopWatch();
}

stop.addEventListener("click", stopFun);
function stopFun() {
  timer = false;
}

reset.addEventListener("click", resetFun);
function resetFun() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;

  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopWatch() {
  if (timer == true) {
    count = count + 1;

    if (count == 100) {
      sec += 1;
      count = 0;
    }
    if (sec == 59) {
      min += 1;
      sec = 0;
      count = 0;
    }
    if (min == 59) {
      hr += 1;
      min = 0;
      sec = 0;
      count = 0;
    }

    var hrStr = hr;
    var minStr = min;
    var secStr = sec;
    var countStr = count;

    if (hr < 10) {
      hrStr = "0" + hrStr;
    }
    if (min < 10) {
      minStr = "0" + minStr;
    }
    if (sec < 10) {
      secStr = "0" + secStr;
    }
    if (count < 10) {
      countStr = "0" + countStr;
    }

    document.getElementById("hr").innerHTML = hrStr;
    document.getElementById("min").innerHTML = minStr;
    document.getElementById("sec").innerHTML = secStr;
    document.getElementById("count").innerHTML = countStr;

    setTimeout("stopWatch()", 10);
  }
}
