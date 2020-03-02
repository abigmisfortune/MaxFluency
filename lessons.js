onload = function() {
    document.getElementById("starter").onclick = function () {
      console.log("clicked!");
      location.href = "quiz.html";
    }

  }
  document.getElementById("tutor").onclick = function () {
    console.log("clicked!");
    location.href = "tutorial.html";
 }

 document.getElementById("back").onclick = function () {
    console.log("clicked!");
    location.href = "index.html";
}
