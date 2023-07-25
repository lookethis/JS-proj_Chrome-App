const images = ["rabbit.jpg", "swan.jpg", "cat.jpg", "squirrel.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
