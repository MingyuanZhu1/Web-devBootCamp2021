const p1Button = document.querySelector("#p1button");
const p2Button = document.querySelector("#p2button");
const p1score = document.querySelector("#p1Score");
const p2score = document.querySelector("#p2Score");
const reset = document.querySelector('#reset');
const winningScoreSelect = document.querySelector("#playto");

let p1cur = 0;
let p2cur = 0;
let winnerScore = 5;
let isGameOver = false;

p1Button.addEventListener("click", function () {
    if (!isGameOver) {
        p1cur++;
        if (p1cur === winnerScore) {
            isGameOver = true;
            p1score.classList.add("winner");
            p2score.classList.add("loser");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1score.innerText = p1cur;
    }
})

p2Button.addEventListener("click", function () {
    if (!isGameOver) {
        p2cur++;
        if (p2cur === winnerScore) {
            isGameOver = true;
            p2score.classList.add("winner");
            p1score.classList.add("loser");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2score.innerText = p2cur;
    }
})

reset.addEventListener("click", resetscore);

winningScoreSelect.addEventListener('change', function () {
    winnerScore = parseInt(this.value);
    resetscore();
})

function resetscore() {
    isGameOver = false;
    p1cur = 0;
    p2cur = 0;
    p1score.innerText = p1cur;
    p2score.innerText = p2cur;
    p1score.className = "";
    p2score.className = "";
    p1Button.disabled = false;
    p2Button.disabled = false;

}