const newQuote = document.querySelector("#new-quote");
const quote = document.querySelector("#text");
const author = document.querySelector("#author");
const twitter = document.querySelector("#tweet-quote");

let quoteObject;

//add quote when page loads
window.onload = getQuote;

//change quote when button is clicked
newQuote.addEventListener("click", getQuote);

//function to get and assign quote and author
function getQuote(){
  //fetch the data
    fetch('https://quota.glitch.me/random')
    .then(res => res.json())//response type
    .then(data => {
      quoteObject = data;   // assign data to quoteObject
      //display quote
      quote.textContent = quoteObject["quoteText"];
      //display author
      author.innerHTML = `...<i class='fas fa-pencil-alt'></i> ${quoteObject['quoteAuthor']}`;
      //share the quote on twitter  
      twitter.setAttribute("href", `https://twitter.com/intent/tweet?text= ${quoteObject['quoteText'] + ' - ' + quoteObject['quoteAuthor']}`); 
    }); 
}

// data contains an object like the one below
     /*{quoteText: "As we express our gratitude, we must never forget …ation is not to utter words, but to live by them.", 
      quoteAuthor: "John F. Kennedy"}*/