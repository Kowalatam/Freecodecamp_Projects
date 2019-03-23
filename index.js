const newQuote = document.querySelector("#new_quote");
const quote = document.querySelector("#quote_text");
const author = document.querySelector("#quote_author");
const twitter = document.querySelector("#twitter");

let quoteObject = {
		quoteText: "As we express our gratitude, we must never forget action is not to utter words, but to live by them.", 
     	quoteAuthor: "John F. Kennedy"
    };

//add quote when page loads
/*window.onload = function() {
  getQuote();
};*/

//change quote after a number of seconds
$(document).ready(function() {
  setTimeout(function() {
    getQuote();
  }, 1500);
});

//change quote when button is clicked
newQuote.addEventListener("click", getQuote);


//function to get and assign quote and author
function getQuote(){
	//fetch the data
    fetch('https://quota.glitch.me/random')
    .then(res => res.json())//response type
    .then(data => quoteObject = data) // assign data to quoteObject

   // quoteObject contains an object like the one below
     /*{quoteText: "As we express our gratitude, we must never forget …ation is not to utter words, but to live by them.", 
     	quoteAuthor: "John F. Kennedy"}*/

	//display quote
	quote.textContent = quoteObject["quoteText"];
	//display author
	author.innerHTML = "...<i class='fas fa-pencil-alt'></i> " + quoteObject["quoteAuthor"];
	//share the quote on twitter	
	twitter.setAttribute("href", "https://twitter.com/intent/tweet?text=" + quoteObject["quoteText"] + " - " + quoteObject["quoteAuthor"]);	
}
