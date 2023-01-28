const rightArrowButton = document.getElementById("rightArrowButton");
const leftArrowButton = document.getElementById("leftArrowButton");

rightArrowButton.addEventListener("click", () => {
  document.querySelector(".main-commission-table").style.display = "block";
  document.querySelector(".main-currency-table").style.display = "none";
  document.querySelector(".rightArrowButton").style.display = "none";
  document.querySelector(".leftArrowButton").style.display = "block";
});

leftArrowButton.addEventListener("click", () => {
  document.querySelector(".main-commission-table").style.display = "none";
  document.querySelector(".main-currency-table").style.display = "block";
  document.querySelector(".rightArrowButton").style.display = "block";
  document.querySelector(".leftArrowButton").style.display = "none";
});
