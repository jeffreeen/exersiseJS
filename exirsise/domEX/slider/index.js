
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const sliderList = document.querySelector("#list");
const computedStyles = window.getComputedStyle(sliderList);
const items = document.querySelectorAll(".slider__item");

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step;
const maxRight = (items.length - preShownItems) * step;
let currentRight = 0;

sliderList.style.right = currentRight;

right.addEventListener("click", e => {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    sliderList.style.right = `${currentRight}px`;
  }
})

left.addEventListener("click", e => {
  e.preventDefault();

  if (currentRight > minRight) {
    currentRight -= step;
    sliderList.style.right = `${currentRight}px`;
  }
})