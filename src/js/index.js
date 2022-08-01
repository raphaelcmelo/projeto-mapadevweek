const btnForward = document.getElementById("btn-forward");
const btnBack = document.getElementById("btn-back");
let numCard = 0;
const cards = document.querySelectorAll(".poke-card");

function hideSelected(){
  const selectedCard = document.querySelector(".poke-card-selected");  
  selectedCard.classList.remove("poke-card-selected");
}

function showSelected(indexCard){
  cards[indexCard].classList.add("poke-card-selected");
}

btnForward.addEventListener("click", function(){

  if (numCard === cards.length - 1) return;
    hideSelected();
    numCard++;
    showSelected(numCard);
})

btnBack.addEventListener("click", function(){

  if (numCard === 0) return;
  hideSelected()
  numCard--;
  showSelected(numCard);
})