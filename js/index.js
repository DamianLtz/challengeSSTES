const toggleButton = document.querySelector("#menu");

const menuVisible = document.querySelector(".navbar__menu__options");

console.log(menuVisible);

toggleButton.addEventListener("click", () => {
  console.log("hola");
  if (menuVisible.classList.contains("menu-visible")) {
    menuVisible.classList.remove("menu-visible");
  } else {
    menuVisible.classList.add("menu-visible");
  }
});
