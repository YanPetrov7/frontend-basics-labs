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

// task2
const picture = document.getElementsByClassName("picture")[0];
const imageContainer = document.getElementById("imageContainer");

const addButton = document.getElementById("add");
const enlargeButton = document.getElementById("enlarge");
const reduceButton = document.getElementById("reduce");
const deleteButton = document.getElementById("delete");

// Fucntion to adjust the width of all images of the class "picture"
const adjustWidth = (amount) => {
  const images = document.querySelectorAll(".picture");
  for (const image of images) {
    const currentWidth = parseInt(getComputedStyle(image).getPropertyValue('width'));
    image.style.width = `${currentWidth + amount}px`;
  }
};

addButton.addEventListener("click", () => {
  const clonedImage = document.querySelector(".picture").cloneNode(true);
  
  imageContainer.appendChild(clonedImage);
});

enlargeButton.addEventListener("click", () => {
  adjustWidth(50);
});

reduceButton.addEventListener("click", () => {
  adjustWidth(-50);
});

deleteButton.addEventListener("click", () => {
  const images = document.querySelectorAll(".picture");
  if (images.length > 1) {
    const lastImage = images[images.length - 1];
    lastImage.remove();
  }
});
