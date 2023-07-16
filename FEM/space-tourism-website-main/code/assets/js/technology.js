const dots = document.querySelectorAll(".dot");
const crewArticles = document.querySelectorAll(
  ".technology-section .content article"
);

crewArticles.forEach((article) => {
  article.style.display = "none";

  if (article.id === "launch-vehicle") {
    article.style.display = "flex";

    const correspondingDot = document.querySelector(".dots #" + article.id);
    if (correspondingDot) {
      correspondingDot.classList.add("active-dot");
    }
  }
});

// Show the article corresponding to the clicked dot
dots.forEach((dot) => {
  dot.addEventListener("click", (event) => {
    event.preventDefault();

    const clickedDot = event.currentTarget;
    const targetArticleId = clickedDot.id;

    dots.forEach((dot) => {
      if (dot.id === targetArticleId) {
        dot.classList.add("active-dot");
      } else {
        dot.classList.remove("active-dot");
      }
    });

    crewArticles.forEach((article) => {
      if (article.id === targetArticleId) {
        article.style.display = "flex";
      } else {
        article.style.display = "none";
      }
    });
  });
});
