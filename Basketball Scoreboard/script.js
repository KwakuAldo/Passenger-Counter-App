let scoreEl = document.getElementById("score-el");
let scoreElAway = document.getElementById("score-el-away");

let score = 0;
let scoreAway = 0;

function onePoint() {
    score += 1;
    scoreEl.textContent = score;
}

function twoPoint() {
    score += 2;
    scoreEl.textContent = score;
}

function threePoint() {
    score += 3;
    scoreEl.textContent = score;
}

function onePointAway() {
    scoreAway += 1;
    scoreElAway.textContent = scoreAway;
}

function twoPointAway() {
    scoreAway += 2;
    scoreElAway.textContent = scoreAway;
}

function threePointAway() {
    scoreAway += 3;
    scoreElAway.textContent = scoreAway;
}