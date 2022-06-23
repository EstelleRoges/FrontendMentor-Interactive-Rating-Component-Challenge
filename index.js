const firstBox = document.getElementById("first");
const secondBox = document.getElementById("second");
const ratingButtons = document.getElementsByName("ratings");
const inputs = document.getElementsByClassName("nb");

let number = null;
const rating = document.getElementById("rating");

const selectRating = () => {
  for (let i = 0; i < ratingButtons.length; i++) {
    inputs[i].classList.remove("active");
    if (ratingButtons[i].checked) {
      number = ratingButtons[i].value;
      inputs[i].classList.add("active");
    }
  }
  return number;
};

const displayRating = (event) => {
  event.preventDefault();
  firstBox.classList.toggle("none");
  secondBox.classList.toggle("none");
  rating.innerHTML = number;
};
