// Nav menu click event
function button_click(x) {
  if (x != "home") {
    document.getElementById("logo").style.display = "none";
    document.getElementById("frontTitle").style.display = "none";

    if (x == "about") {
      document.getElementById("projectsArea").style.display = "none";
      document.getElementById("contactArea").style.display = "none";
      document.getElementById("aboutArea").style.display = "block";
    }

    if (x == "projects") {
      document.getElementById("aboutArea").style.display = "none";
      document.getElementById("contactArea").style.display = "none";
      document.getElementById("projectsArea").style.display = "block";
    }

    if (x == "contact") {
      document.getElementById("aboutArea").style.display = "none";
      document.getElementById("projectsArea").style.display = "none";
      document.getElementById("contactArea").style.display = "block";
    }
  } else {
    console.log(x);
    document.getElementById("aboutArea").style.display = "none";
    document.getElementById("projectsArea").style.display = "none";
    document.getElementById("contactArea").style.display = "none";
    document.getElementById("logo").style.display = "block";
    document.getElementById("frontTitle").style.display = "block";
  }
}

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("myTime").textContent = "EST: " + time;

  setTimeout(showTime, 1000);
}
