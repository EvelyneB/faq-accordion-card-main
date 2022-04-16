const thequestions = document.querySelectorAll(".questions");
const theanswers = document.querySelectorAll(".answers");
console.log(thequestions);
var flag = 0;

thequestions.forEach((question, i) => {
  thequestions[i].addEventListener("click", () => {
    flag = i;
    theanswers.forEach((answer, i) => {
      if (flag === i) {
        theanswers[i].classList.toggle("active");
        thequestions[i].classList.toggle("active");
      } else {
        theanswers[i].classList.remove("active");
        thequestions[i].classList.remove("active");
      }
    });
  });
});
