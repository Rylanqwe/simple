const flipButton = document.getElementById("flip-button");
const result = document.getElementById("result");

flipButton.addEventListener("click", () => {
  const flip = Math.round(Math.random());
  if (flip === 0) {
    result.innerHTML = "Heads";
  } else {
    result.innerHTML = "Tails";
  }
});
