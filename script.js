const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".name"),
quoteBtn = document.querySelector("button");

//random quote function
function randomquote(){
    //fetching data from api and parsing it in javascript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
         console.log(result);
         quoteText.innerText = result.content;
         authorName.innerText = result.author;
    });
}

quoteBtn.addEventListener("click",randomquote);
  
