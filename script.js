"use strict";

const arrowBtns = document.querySelectorAll("[data-answer]");
const answers = document.querySelectorAll(".answer");
const questionsContainer = document.querySelector(".questions");
const questions = document.querySelectorAll(".question");

questionsContainer.addEventListener("click", (e) => {
  for (let i = 0; i < arrowBtns.length; i++) {
    answers[i].classList.remove("visible");
    arrowBtns[i].classList.remove("opened");
    questions[i].classList.remove("bold");
    if (
      e.target === arrowBtns[i].parentElement.children[0] ||
      e.target === arrowBtns[i].parentElement.children[1]
    ) {
      const id = arrowBtns[i].dataset.answer;
      let answer = document.getElementById(id);
      answer.classList.toggle("visible");
      arrowBtns[i].classList.toggle("opened");

      questions[i].classList.add("bold");
    }
  }
});
