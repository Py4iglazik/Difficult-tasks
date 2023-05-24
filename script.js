//Первая сложная задача.
let gameRules = {
    diceNumber: 2,
    attemptsNumber: 2
};

let cats = [];

let catNumberOne = {
    name: "Кекс",
    points: 0
};
cats.push(catNumberOne);

let catNumberTwo = {
    name: "Плакс",
    points: 0
};
cats.push(catNumberTwo);

let catNumberThree = {
    name: "Мурзик",
    points: 0
};
cats.push(catNumberThree);


let rules = function(gameRules, players) {
    for (let currentAttempt = 1; currentAttempt <= gameRules.attemptsNumber; currentAttempt++) {
        for (let currentPlayer = 0; currentPlayer < players.length; currentPlayer++) {
            let randomNumber = Math.floor(Math.random()*(6*gameRules.diceNumber));
            while (randomNumber < gameRules.diceNumber) {
                randomNumber = Math.floor(Math.random()*(6*gameRules.diceNumber));
            }
            players[currentPlayer].points += randomNumber;
            if (currentAttempt == gameRules.attemptsNumber) {
                console.log("На костях кота по имени " + players[currentPlayer].name + ": " + players[currentPlayer].points);
            }
        }
    }
};


let winners = function(players) {
    let winners = [];
    let max = players[0];
    for (let i = 0; i < players.length; i++) {
        let currentPlayer = players[i];
        if (currentPlayer.points > max.points) {
            max = currentPlayer;
            winners = [max];
        } else if (currentPlayer.points === max.points) {
            winners.push(currentPlayer);
        }
    }
    return winners;
};


let congratulation = function(players, winners) {
    let message;
    if (winners.length == players.length) {
        message = "Вы все как на подбор, одинаковые!";
        return message;
    }  else if (winners.length == 1) {
        message = "Победитель - игрок: ";
    } else if (winners.length > 1) {
        message = "Победители - игроки: ";
    }

    for (let numberOfWinners = 0; numberOfWinners < winners.length; numberOfWinners++) {
        if (numberOfWinners >= 1) {
            message += ", ";
        }
        message += winners[numberOfWinners].name;
    }
    message += ".";
    message += " Количество очков: " + winners[0].points + ".";
    
    return message;
};


rules(gameRules, cats);
let top = winners(cats);
let congrats = congratulation(cats, top);
console.log(congrats);