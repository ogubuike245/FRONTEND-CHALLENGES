const quoteIdFromAdviceSlip = document.querySelector("span#quotenumber");
const quoteFromAdviceSlip = document.querySelector("h2#quote");

const API_URL = "https://api.adviceslip.com/advice";
function getAdvice(url) {
  return fetch(url).then((response) => response.json());
}
const API = { getAdvice };

(function randomAdvice() {
  API.getAdvice(API_URL).then((data) => addQuote(data.slip));
  // API.getAdvice(API_URL).then((data) => console.log(data.slip));
})();

function addQuote(quote) {
  quoteIdFromAdviceSlip.innerText = `#${quote.id}`;
  quoteFromAdviceSlip.innerText = `"${quote.advice}"`;
}
