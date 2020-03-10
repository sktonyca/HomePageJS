// Nav menu click event
function button_click(x) {
  if (x != "home") {
    document.getElementById("logo").style.display = "none";

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
  }
}
