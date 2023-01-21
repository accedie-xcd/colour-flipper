const colours = ["green", "red", "orange", "yellow", "white", "blue", "purple", "pink", "black", "cyan", "magenta", "crimson", "teal", "violet"];

const btn = document.getElementById("btn");
const colour = document.querySelector('.colour');

btn.addEventListener("click", function(){

  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor= colours[randomNumber];
  colour.textContent = colours[randomNumber];
})

  //get random number betwen 0-length of array
function getRandomNumber() {
  return Math.floor(Math.random() * colours.length) ;
}