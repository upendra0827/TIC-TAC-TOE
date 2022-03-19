const box = document.getElementsByClassName('box')
const first_row = document.getElementById('first_row')
const second_row = document.getElementById('second_row')
const third_row = document.getElementById('third_row')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const fourth = document.querySelector('.fourth')
const fifth = document.querySelector('.fifth')
const sixth = document.querySelector('.sixth')
const seventh = document.querySelector('.seventh')
const eighth = document.querySelector('.eighth')
const nineth = document.querySelector('.nineth')
const player_1 = document.querySelector('.player_1')
const player_2 = document.querySelector('.player_2')
let wins = 0
let winner = ''

const game_box = document.getElementById('game_box')
let count = 0
console.log(player_1)
player_1.style.display = 'block'
player_2.style.display = 'none'


game_box.addEventListener('click', function(event) {


    if (event.target.getAttribute('clicks_on_box') == 0) {
        count += 1
        if (count % 2 === 1) {
            player_1.style.display = 'none'
            player_2.style.display = 'block'

            event.target.innerText = 'X'
        } else {
            player_1.style.display = 'block'
            player_2.style.display = 'none'

            event.target.innerText = 'O'
        }
        event.target.setAttribute('clicks_on_box', 1)
    }
})


game_box.addEventListener('click', function(event) {

    if (first.innerText === 'X' || first.innerText === 'O') {

        if (first.innerText === second.innerText && second.innerText === third.innerText) {

            if (first.innerText === 'X') {
                winner = 'Player 1'
            } else {
                winner = 'Player 2'
            }
            wins += 1

        } else if (first.innerText === fourth.innerText && fourth.innerText === seventh.innerText) {

            if (first.innerText === 'X') {
                winner = 'Player 1'
            } else {
                winner = 'Player 2'
            }
            wins += 1

        } else if (first.innerText === fifth.innerText && fifth.innerText === nineth.innerText) {

            if (first.innerText === 'X') {
                winner = 'Player 1'
            } else {
                winner = 'Player 2'
            }
            wins += 1
        }
    }
    if (fifth.innerText === 'X' || fifth.innerText === 'O') {

        if (fourth.innerText === fifth.innerText && fifth.innerText === sixth.innerText) {

            if (fourth.innerText === 'X') {
                winner = 'Player 1'
            } else {
                winner = 'Player 2'
            }
            wins += 1

        } else if (fifth.innerText === second.innerText && fifth.innerText === eighth.innerText) {

            if (fifth.innerText === 'X') {
                winner = 'Player 1'
            } else {
                winner = 'Player 2'
            }
            wins += 1

        } else if (fifth.innerText === third.innerText && fifth.innerText === seventh.innerText) {

            if (fifth.innerText === 'X') {
                winner = 'Player 1'
            } else {
                winner = 'Player 2'
            }
            wins += 1
        }
    }

    if (nineth.innerText === 'X' || nineth.innerText === 'O') {

        if (seventh.innerText === eighth.innerText && nineth.innerText === eighth.innerText) {

            if (seventh.innerText === 'X') {
                winner = 'Player 1'
            } else {
                winner = 'Player 2'
            }
            wins += 1

        } else if (third.innerText === sixth.innerText && sixth.innerText === nineth.innerText) {

            if (third.innerText === 'X') {
                winner = 'Player 1'
            } else {
                winner = 'Player 2'
            }
            wins += 1
        }
    }
})

game_box.addEventListener('click', function() {

    setTimeout(function() {
        if (count === 9 && wins === 0) {
            alert('Its draw')

            location.reload()
        }
    }, 100)
})

game_box.addEventListener('click', function() {

    setTimeout(function() {
        if (wins === 1) {
            alert(`${winner} won the game`)
            location.reload()
        }
    }, 100)

})