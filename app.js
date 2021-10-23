const element = document.getElementById("colorStatement");

function changeColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  if (document.body.style.backgroundColor === "#" + 000000) {
    element.style.color = "#" + FFFFFF;
  }
  element.innerHTML = "#" + randomColor;
}
