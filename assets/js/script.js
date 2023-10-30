const selector = document.querySelectorAll('.character div');

function getComputer() {
    const generateComp = Math.round(Math.random() * 3);

    if (generateComp == 0) return 'rock';
    if (generateComp == 1) return 'paper';
    return 'scissors';
}

function gameResult(computer, player) {
    if (player == computer) return 'draw';
    if (player == 'rock') return (computer == 'scissors') ? 'win' : 'lose';
    if (player == 'paper') return (computer == 'rock') ? 'win' : 'lose';
    if (player == 'scissors') return (computer == 'paper') ? 'win' : 'lose';
}

function changeCharacter(computer, player) {
    const cCharacter = document.querySelector('.comp-zone img');
    const pCharacter = document.querySelector('.player-zone img');

    pCharacter.setAttribute('src', `./assets/img/${player}.png`);
    cCharacter.setAttribute('src', `./assets/img/${computer}-c.png`);
}

function logResult(result) {
    const log = document.querySelectorAll('.log-container div div p');
    const win = Number(log[0].innerHTML);
    const draw = Number(log[1].innerHTML);
    const lose = Number(log[2].innerHTML);

    if (result == 'win') return log[0].innerHTML = win + 1;
    if (result == 'draw') return log[1].innerHTML = draw + 1;
    if (result == 'lose') return log[2].innerHTML = lose + 1;
}

selector.forEach((item) => {
    item.addEventListener('click', () => {
        const computer = getComputer();
        const player = item.className;
        const result = gameResult(computer, player);
        const showResult = document.querySelector('.result span');

        showResult.innerHTML = '';

        changeCharacter(computer, player);

        setTimeout(() => {
            showResult.innerHTML = result.toUpperCase();
            logResult(result);
        }, 500)
    })
})