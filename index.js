const progressBar = document.querySelector(".progress-bar");
const inputRange = document.querySelector(".range");

inputRange.addEventListener("input", function () {
  progressBar.style.width = `${this.value}%`;
});
