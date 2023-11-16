// task 1
const thirdElement = document.getElementById("thirdElement");
const fourthElement = document.querySelector("#fourthElement");

const colors = ["blue", "red"];
const changeColor = (elem) => {
  const textColor = colors[(colors.indexOf(elem.style.color) + 1) % colors.length];
  const backgroundColor = colors[(colors.indexOf(textColor) + 1) % colors.length];

  elem.style.color = textColor;
  elem.style.backgroundColor = backgroundColor;
};

thirdElement.addEventListener("click", () => {
  changeColor(thirdElement)
});

fourthElement.addEventListener("click", () => {
  changeColor(fourthElement)
});
