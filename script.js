const quote = document.querySelector(".quotes");
const author = document.querySelector(".quote-author");

async function getData() {
    //await the response of the fetch call
    let response = await fetch("https://type.fit/api/quotes");
    //proceed once the first promise is resolved.
    var data = await response.json();
    //proceed only when the second promise is resolved
    let index = Math.floor(Math.random() * data.length);
    let q = data[index].text;
    let a = data[index].author;
    if (!a)
        a = "Anonymous"
    quote.innerHTML = q;
    author.innerHTML = a;
}

getData();