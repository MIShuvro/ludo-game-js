var scores, roundScore, activePlayer,state;
initGame();

//Roll Dise
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (state) {
        var dise = Math.floor(Math.random() * 6) + 1
        var diseDom = document.querySelector('.dice');
        diseDom.style.display = 'block'
        diseDom.src = 'dice-' + dise + '.png';


        if (dise !== 1) {
            roundScore = dise
            var preCurrentScore = document.querySelector('#current-' + activePlayer).textContent;
            var total = 0;
            total = document.querySelector('#current-' + activePlayer).textContent = parseInt(preCurrentScore) + roundScore
            if (activePlayer == 0) {
                scores.fill(total, 0, 1)
                //console.log(scores[0]); 
            } else {
                scores.fill(total, 1, 2)
                //console.log(scores[0]); 
            }
        } else {
            //When dise value=1
            var preCurrentScore = document.querySelector('#current-' + activePlayer).textContent = '0'
            if (activePlayer == 0) {

                activePlayer = 1
            } else {

                activePlayer = 0
            }
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.dice').style.display = 'none'
        }
    }
})



//Hold dise
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (state) {
        var diseDom = document.querySelector('.dice')
        diseDom.style.display = 'none'
        document.querySelector('#current-' + activePlayer).textContent = '0'

        var preScore = document.querySelector('#score-' + activePlayer).textContent;

        var win = document.querySelector('#score-' + activePlayer).textContent = parseInt(preScore) + scores[activePlayer]

        if (win >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            state = false


        } else {
            if (activePlayer == 0) {
                activePlayer = 1;
            } else {
                activePlayer = 0
            }

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

        }
    }
})



//New Game
document.querySelector('.btn-new').addEventListener('click', initGame)

//Initlize Game
function initGame() {
    scores = [0, 0]
    roundScore = 0
    state = true;
    activePlayer = (Math.floor(Math.random() * 2) + 1) - 1
    if (activePlayer == 0) {
        document.querySelector('.player-0-panel').classList.add('active');
    } else {
        document.querySelector('.player-1-panel').classList.add('active');
    }

    document.querySelector('.dice').style.display = 'none'

    document.querySelector('#score-0').textContent = '0'
    document.querySelector('#current-0').textContent = '0'
    document.querySelector('#score-1').textContent = '0'
    document.querySelector('#current-1').textContent = '0'
    document.querySelector('#name-0').textContent = 'Player 1'
    document.querySelector('#name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}