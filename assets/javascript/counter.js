console.log("Run That Back Turbo");

let incrementButton = document.querySelector("#increment");
let decrementButton = document.querySelector("#decrement");
let counter = document.querySelector("#counter");

console.log(incrementButton);

// This line says, "I want to listen for someone to CLICK my
// incrementButton, and any time I 'hear' that event occur,
// I want some code to run.
incrementButton.addEventListener("click", function () {
  console.log("+ button clicked");
  let newCounterValue = Number(counter.innerHTML) + 1;
  counter.innerHTML = newCounterValue;
  if (newCounterValue >= 10) {
    counter.style.color = "red";
  }
});

decrementButton.addEventListener("click", function () {
  console.log("- button clicked");
  let newCounterValue = Number(counter.innerHTML) - 1;
  counter.innerHTML = newCounterValue;
  if (newCounterValue < 10) {
    counter.style.color = "purple";
  }
  if (counter.innerHTML > 0) {
    counter.innerHTML = newCounterValue;
  }
});
