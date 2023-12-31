import { voteTakout, getWinner, voteLeftovers } from "./score.js";

const winnerText = document.getElementById("winner");
const leftoversBtn = document.getElementById("leftovers");
const takeoutBtn = document.getElementById("takeout");

const updateWinner = () => {
  const currWinner = getWinner();
  winnerText.innerText = currWinner;
};

takeoutBtn.addEventListener("click", () => {
  voteTakout();
  updateWinner();
});

leftoversBtn.addEventListener("click", () => {
  voteLeftovers();
  updateWinner();
});
