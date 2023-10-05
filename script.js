"use strict";

const arrowBtns = document.querySelectorAll("[data-answer]");
console.log(arrowBtns);
const answers = document.querySelectorAll(".answer");
const questionsContainer = document.querySelector(".questions");

questionsContainer.addEventListener("click", (e) => {
  for (let i = 0; i < arrowBtns.length; i++) {
    answers[i].classList.remove("visible");
    arrowBtns[i].classList.remove("opened");
    if (e.target === arrowBtns[i]) {
      const id = arrowBtns[i].dataset.answer;
      let answer = document.getElementById(id);
      answer.classList.toggle("visible");
      arrowBtns[i].classList.toggle("opened");
    }
  }
});
