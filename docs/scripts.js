const colours = ["green", "red", "orange", "yellow", "white", "blue", "purple", "pink", "black", "cyan", "magenta", "crimson", "teal", "violet"];

const btn = document.getElementById("btn");
const colour = document.querySelector('.colour');

btn.addEventListener("click", function(){
  //get random number betwen 0-3
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor= colours[randomNumber];
  colour.textContent = colours[randomNumber];
})

function getRandomNumber() {
  return Math.floor(Math.random() * colours.length) ;
}