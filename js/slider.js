const slideContainer = document.getElementById("slider-container"),
  nextBtn = document.getElementById("next-slide-btn"),
  prevBtn = document.getElementById("prev-slide-btn"),
  slides = document.getElementsByClassName("slides"),
  slidesCount = document.querySelectorAll("#slide-count li div");

const periodInterval = 10000;
let interval = null;

const unfocusColor = "rgb(209, 209, 209)",
  focusColor = "rgb(122, 122, 122)";

// Starts slider when body element was loaded.
document.body.onload = () => slider();
function slider() {
  interval = setInterval(() => changeSlide("next"), periodInterval);
}

nextBtn.onclick = () => {
  changeSlide("next");
  resetInterval();
};
prevBtn.onclick = () => {
  changeSlide("previous");
  resetInterval();
};

let index = 0;
function changeSlide(dir) {
  slides[index].classList.replace("active", "de-active");
  slidesCount[index].style.background = unfocusColor;
  if (dir === "next") {
    index++;
    index %= slides.length;
  } else if (dir === "previous") {
    index--;
    if (index < 0) index = slides.length - 1;
  }
  slides[index].classList.replace("de-active", "active");
  slidesCount[index].style.background = focusColor;
}

function resetInterval() {
  // Destroying current run of interval.
  clearInterval(interval);
  // Creat new interval and start that.
  slider();
}
