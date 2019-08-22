var screen = document.querySelector("#screen");
var btn = document.querySelector(".button-item");

btn.addEventListener("click", function(e) {
  var btnClick = e.target;
  var btnResult = btnClick.innerText;

  if (btnResult == "C") {
    screen.value = "";
  } else if (btnResult == "Del") {
    screen.value = screen.value.slice(0, -1);
  } else if (btnResult == "=") {
    screen.value = eval(screen.value);
  } else {
    screen.value = screen.value + btnResult;
  }
});
