const toggleButton = document.querySelector("#menu");

const menuVisible = document.querySelector(".navbar__menu__options");

toggleButton.addEventListener("click", () => {
  if (menuVisible.classList.contains("menu-visible")) {
    menuVisible.classList.remove("menu-visible");
  } else {
    menuVisible.classList.add("menu-visible");
  }
});
