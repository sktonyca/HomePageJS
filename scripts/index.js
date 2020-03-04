function start() {
  var x = document.getElementsByClassName("jumbotron jumbotron-fluid");
  console.log(x);
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}

function button_click(x) {
  if (x != "home") {
    document.getElementById("logo").style.display = "none";

    if (x == "htmlCSS") {
      document.getElementById("htmlArea").style.display = "block";
      document.getElementById("jsArea").style.display = "none";
      document.getElementById("csharpArea").style.display = "none";
      document.getElementById("aspArea").style.display = "none";
    }
    if (x == "Jscript") {
      document.getElementById("jsArea").style.display = "block";
      document.getElementById("htmlArea").style.display = "none";
      document.getElementById("csharpArea").style.display = "none";
      document.getElementById("aspArea").style.display = "none";
    }
    if (x == "cSharp") {
      document.getElementById("csharpArea").style.display = "block";
      document.getElementById("jsArea").style.display = "none";
      document.getElementById("aspArea").style.display = "none";
      document.getElementById("htmlArea").style.display = "none";
    }
    if (x == "aspN") {
      document.getElementById("aspArea").style.display = "block";
      document.getElementById("htmlArea").style.display = "none";
      document.getElementById("jsArea").style.display = "none";
      document.getElementById("csharpArea").style.display = "none";
    }
  } else {
    console.log(x);
    document.getElementById("logo").style.display = "block";
    start();
  }
}
