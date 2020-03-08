function button_click(x) {
  if (x != "home") {
    document.getElementById("logo").style.display = "none";

    if (x == "about") {
      document.getElementById("aboutArea").style.display = "block";
    }
  } else {
    console.log(x);
    document.getElementById("logo").style.display = "block";
    document.getElementById("aboutArea").style.display = "none";
    start();
  }
}
