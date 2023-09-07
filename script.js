let quoteElement = document.getElementById("quote");
let getQuote = document.getElementById("getQuote");
let authorElement = document.getElementById("authorElement");
let url = "https://api.quotable.io/random";

fechFunction(url);
function getUrl(e) {
  fechFunction(url);
  e.preventDefault();
}

function fechFunction(url) {
  fetch(url).then((response) => {
    console.log(response);
    if (response.ok) {
      response.json().then((data) => {
        console.log(data);
        console.log(data.content);

        console.log(data.author);

        let author = data.author;
        let quote = data.content;

        quoteElement.innerText = quote;
        authorElement.innerText = author;
      });
    }
  });
}

getQuote.addEventListener("click", getUrl);
