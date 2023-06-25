const headerLinks = document.querySelectorAll(".header ul li");
const articles = document.querySelectorAll(".content article");

headerLinks[0].classList.add("border-bottom");

headerLinks.forEach((link) => {
  link.addEventListener("click", handleClick);
});

function handleClick(event) {
  event.preventDefault();

  const clickedLink = event.currentTarget;
  const target = clickedLink.textContent.toLowerCase();

  removeBorders(headerLinks);
  addBorder(clickedLink);

  hideArticles(articles);
  displayArticle(target);
}

function removeBorders(links) {
  links.forEach((link) => {
    link.classList.remove("border-bottom");
  });
}

function addBorder(link) {
  link.classList.add("border-bottom");
}

function hideArticles(articles) {
  articles.forEach((article) => {
    article.style.display = "none";
  });
}

function displayArticle(target) {
  const targetArticle = document.getElementById(target);
  targetArticle.style.display = "flex";

  const articleLinks = targetArticle.querySelectorAll("li");
  const matchingLink = Array.from(articleLinks).find((articleLink) => {
    return articleLink.textContent.toLowerCase() === target;
  });

  if (matchingLink) {
    addBorder(matchingLink);
  }
}
