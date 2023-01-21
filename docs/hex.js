const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'c', 'D', 'E', 'F'];

const btn = document.getElementById("btn");
const colour = document.querySelector('.colour');

btn.addEventListener("click", function(){
  
  let hexColour = getRandomHex();

  document.body.style.backgroundColor = hexColour;
  colour.textContent = hexColour;
})

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length) ;
}

function getRandomHex() {
  let hexColour = '#';
  for (let i = 0; i < 6; i++) {
    hexColour += hex[getRandomNumber()];
  }
  return hexColour;
}