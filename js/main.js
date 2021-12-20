const nav = document.querySelector("#main-header  div");

window.onscroll = () => scrollHandling();
function scrollHandling() {
  const scrollY = window.scrollY;
  changeHeightOfNav(scrollY);
}

function changeHeightOfNav(scrollY) {
  if (scrollY >= 80) {
    nav.style.height = "4rem";
  } else {
    nav.style.height = "6.3rem";
  }
}
