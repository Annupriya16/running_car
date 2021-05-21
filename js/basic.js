m = 0;
var y;
let leftwheel = document.getElementById("leftwheel");
let rightwheel = document.getElementById("rightwheel");
console.log(rightwheel);
let r = 0;
function start() {
  y = setInterval(run, 100);

  function run() {
    if (m >= window.innerWidth - 150) {
      m = 0;
    }
    // if (m == 1200) {
    //   clearInterval(y);
    // }
    //else {
    // stop point = window_width - imaage width
    m += 10;
    r = r + 35;
    leftwheel.style.transform = "rotate(" + r + "deg)";
    rightwheel.style.transform = "rotate(" + r + "deg)";
    var x = document.getElementById("img");
    x.style.marginLeft = m + "px";
    leftwheel.style.marginLeft = m + "px";
    rightwheel.style.marginLeft = m + "px";
    // }
  }
}

function stop() {
  clearInterval(y);
}
