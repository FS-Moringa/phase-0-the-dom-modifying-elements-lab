// Write your code here!
const main = document.getElementById("main");
document.body.removeChild(main);

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion";
document.body.appendChild(newHeader);
