const barIcon = document.querySelector(".bars");
const closeIcon = document.querySelector(".close");
const navMenu = document.querySelector("nav");

barIcon.addEventListener("click", (event) => {
  navMenu.style.display = "flex";
  closeIcon.style.display = "block";
  event.target.style.display = "none";
});

closeIcon.addEventListener("click", (event) => {
  navMenu.style.display = "none";
  barIcon.style.display = "block";
  event.target.style.display = "none";
});
