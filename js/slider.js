const slideContainer = document.getElementById("slider-container"),
  nextBtn = document.getElementById("next-slide-btn"),
  prevBtn = document.getElementById("prev-slide-btn"),
  slides = document.getElementsByClassName("slides");

const periodInterval = 10000;
let interval = null;

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
  if (dir === "next") {
    slides[index].classList.replace("active", "de-active");
    index++;
    index %= slides.length;
    slides[index].classList.replace("de-active", "active");
  } else if (dir === "previous") {
    slides[index].classList.replace("active", "de-active");
    index--;
    if (index < 0) index = slides.length - 1;
    slides[index].classList.replace("de-active", "active");
  }
}

function resetInterval() {
  // Destroying current run of interval.
  clearInterval(interval);
  // Creat new interval and start that.
  slider();
}
