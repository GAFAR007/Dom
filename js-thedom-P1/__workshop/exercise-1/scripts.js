// Add your code here!


const mainBody = document.querySelector("main");

const firstHead = document.createElement("h1");
firstHead.innerText =
  "The Best Burger in New York";

const firstParagraph =
  document.createElement("p");
firstParagraph.innerText =
  "Burger fanatic Marshall meets Regis Philbin while on a quest to find the restaurant where he had his very first NewYork burger";

const header2 = document.createElement("h2");
header2.innerText =
  " The Burger Episode (Season 4, Episode 2)";

const secondParagraph =
  document.createElement("p");
secondParagraph.innerText = "IMDB Rating: 8.4";

let img = document.createElement("img");
img.src = "./images/burger.png";

const thirdParagraph =
  document.createElement("p");
thirdParagraph.innerText =
  "The gang is at McLarens and Robin, just off her 7 days cleanse 5 days early, is  dying for any kind of food. When she hear  the special is a burger, she orders five  for the group. However, when Marshall getsconst forthParagraph";

const forthParagraph =
  document.createElement("p");
forthParagraph.innerText =
  "If they're eating burgers tonight, they're eating the best burgers in New York; the journey begins. We learn that when Marshall first moved to New York with Ted, the first time he left their apartment he discovered this burger joint. It simply had a green door and a red neon sign that said ";


  const lastParagraph =
  document.createElement("p");
lastParagraph.innerText =
  "Since he had just moved, he couldn't remember how to get back there; just that it was on a numbered street. Now, eight years later, after searching all night, they finally find the place. It has been replaced by an ATM for Barney's new bank.";

const lastHtag = document.createElement('h1')
lastHtag.innerText =
  "The Best Burger in New York";


mainBody.appendChild(firstHead);
mainBody.appendChild(firstParagraph);
mainBody.appendChild(header2);
mainBody.appendChild(secondParagraph);
mainBody.appendChild(img);
mainBody.appendChild(thirdParagraph);
mainBody.appendChild(forthParagraph);
mainBody.appendChild(lastParagraph);
mainBody.appendChild(lastHtag);