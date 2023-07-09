const openIcon = document.querySelector(".open-menu-icon");
const closeIcon = document.querySelector(".close-menu-icon");
const ulTag = document.querySelector("ul");

openIcon.addEventListener("click", () => {
  ulTag.style.display = "flex";
  closeIcon.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  ulTag.style.display = "none";
  openIcon.style.display = "block";
});
