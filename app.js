let container = document.querySelector('.container');
let color_box = document.querySelector('.color-box');
let btn = document.querySelector('.btn');
let code = document.querySelector('.code');

function randomColorGen() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const colors = `rgb(${red},${blue},${green})`;
  return colors;
}

btn.addEventListener('click', () => {
  const randomColor = randomColorGen();
  code.textContent = randomColor;
  container.style.backgroundColor = randomColor;
});
