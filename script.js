const number = document.getElementById('number')
const button = document.getElementById('button')
const message = document.getElementById('message')

function startGameOn(){
    valorNumber = Math.floor(Math.random() * 1001);
    console.log(valorNumber)
    

}
window.onload = startGameOn

function checkGuess() {
    const guess = parseInt(document.getElementById('number').value);
    const messageElement = document.getElementById('message');

    if (isNaN(guess) || guess < 0 || guess > 1000) {
        messageElement.textContent = "Por favor, insira um número válido entre 0 e 1000.";
        return;
    }
    
    const difference = Math.abs(valorNumber - guess);
   

    if (difference === 0) {
        messageElement.textContent = "Parabéns! Você acertou o número! tente acerta novamente";
        startGameOn();
    } else if (difference <= 25) {
        messageElement.textContent = "Está quente!";
    } else if (difference <= 50) {
        messageElement.textContent = "Está morno.";
    } else {
        messageElement.textContent = "Está frio.";
    }
}

button.addEventListener('click', checkGuess )
