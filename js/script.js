var randomNum = Math.floor((Math.random() * 100) + 1);

var guess = document.getElementById('guess');

var lastGuess = document.getElementById('output');
var button = document.getElementById('guessbutton');

button.onclick = function() {
    
    replaceGuess(guess.value);
    var userGuess = guess.value;
    
    var feedback = document.getElementById('boom');
    var parsed = parseInt(userGuess, 10);

    if (parsed < randomNum) {
      feedback.innerText = "That is too low";
    } else if (parsed > randomNum) {
      feedback.innerText = "That is too high";
    } else if (parsed === randomNum) {
      feedback.innerText = 'BOOM!';
    }
    
    if (!Number.isInteger(parsed)) {
      alert('Please enter a NUMBER');
    }
    
    if (parsed < 0) {
    alert('Minimum is 0');
    }
    if (parsed > 100) {
    alert('Maximum is 100');
    }
};

var replaceGuess = function(userGuess) {
    return lastGuess.innerHTML = userGuess;
};

var clearGuess = document.getElementById('clear');
clearGuess.addEventListener('click', function () {
guess.value = '';
});

