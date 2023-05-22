//Первая сложная задача.
let gameRules = {
    diceNumber: 2,
    attemptsNumber: 2
};

let catNumberOne = {
    name: "Кекс",
    points: 0
};

let catNumberTwo = {
    name: "Плакс",
    points: 0
};

let cats = [catNumberOne, catNumberTwo];

let rules = function(gameRules, players) {
    for (let currentAttempt = 1; currentAttempt <= gameRules.attemptsNumber; currentAttempt++) {
        for (let currentPlayer = 0; currentPlayer < players.length; currentPlayer++) {
            let randomNumber = Math.floor(Math.random()*6);
            while (randomNumber == 0) {
                randomNumber = Math.floor(Math.random()*6);
            }
            players[currentPlayer].points += randomNumber;
            console.log("На костях кота по имени " + players[currentPlayer].name + ": " + players[currentPlayer].points);
        }
    }
};

rules(gameRules, cats);


let winners = function(players) {
    let winner = [];
    let max = players[0];
    for (let i = 0; i < players.length; i++) {
        let currentPlayer = players[i];
        if (currentPlayer.points > max.points) {
            max = currentPlayer;
            winner = [max];
        } else if (currentPlayer.points == max.points) {
            winner = [max];
            winner.push(currentPlayer);
        } else {
            winner = [max];
        }
    }
    console.log(winner);
    return winner;
};

winners(cats);

