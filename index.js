// let count = 5 + 5;

// console.log(count);

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// let myAge = 34;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// let lapsCompleted = 0;

// function totalLaps() {
//     lapsCompleted = lapsCompleted + 1;

// }

// totalLaps();
// totalLaps();
// totalLaps();

// console.log(lapsCompleted);

let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count
}

function save() {
    let currentCount = count + " - ";
    saveEl.textContent += currentCount;
    count = 0;
    countEl.textContent = 0;
}