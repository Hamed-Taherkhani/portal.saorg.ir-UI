const menu = document.querySelector("#main-header nav[menu]"),
  openMenu = document.getElementById("open-menu-btn"),
  closeMenu = document.getElementById("close-menu-btn");

closeMenu.onclick = () => closeMenuPanel();
function closeMenuPanel() {
  menu.classList.remove("maximize-menu");
  menu.classList.add("minimize-menu");
}

openMenu.onclick = () => openMenuPanel();
function openMenuPanel() {
  menu.classList.remove("minimize-menu");
  menu.classList.add("maximize-menu");
  menu.classList = "";
}
