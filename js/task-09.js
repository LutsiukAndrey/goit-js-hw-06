const random = document.querySelector(".change-color");
const span = document.querySelector(".color");
random.addEventListener("click", onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onButtonClick(event) {
  span.textContent = getRandomHexColor();
  if (event.target.classList.contains(".widget")) {
    return;
  }
  return (document.body.style.background = getRandomHexColor());
}