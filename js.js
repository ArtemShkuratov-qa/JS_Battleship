var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var iaSunk = false;

while (iaSunk == false) {
    guess = prompt("Готовься, целься, пли! (введи число от 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Пожалуйста, введите валидное значение");
    }  else {
            guesses = guesses + 1;
            if (guess == location1 || guess == location2 || guess == location3) {
                    alert("Попадание!");
                    hits = hits + 1;
                    if (hits == 3) {
                            iaSunk = true;
                            alert ("Ты потопил мой корабль!");
                    }
            } else {
                    alert ("Промах!");
            }
    }
}
var stats = "Твой результат: " + guesses + " попыток. Твоя точность равна " + (3/guesses);
alert(stats);   
