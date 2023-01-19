let player_score = 0;
let comp_score = 0;
let round = 0;

const result_message = document.querySelector('.outcome'); 
const round_num = document.querySelector('.round');
const weapon_selector = document.querySelectorAll('.weapon-button');
const play_again = document.querySelector('.play-again');



// CHOICES AVAILABLE //
CHOICES = ['Rock', 'Paper', 'Scissors']

// Computer random function
function getComputerChoice() {
    computer_selection =  CHOICES[Math.floor(CHOICES.length * Math.random())].toLowerCase();
    const comp_icon = document.querySelector('.comp_fa_icon');

    comp_icon.classList.remove('fa-hand-back-fist', 'fa-hand', 'fa-hand-scissors', 'fa-question');
    if (computer_selection === 'rock') {
        comp_icon.classList.add('fa-hand-back-fist');
        comp_icon.getElementsByClassName.color = '#dc143c';
    }
    else if (computer_selection === 'paper') {
        comp_icon.classList.add('fa-hand');
        comp_icon.getElementsByClassName.color = '#2e8b57';
    }
    else if (computer_selection === 'scissors') {
        comp_icon.classList.add('fa-hand-scissors');
        comp_icon.getElementsByClassName.color = '#5f9ea0';
    }
    return computer_selection;
}


// Function which compares output of player vs. computer and gives result
function play_round(player_selection, computer_selection) {
    const computer_choice = document.querySelector('.computer-choice');
    const choices = document.querySelector('.choices');
    switch (true) {
        case (player_selection === computer_selection):
            
            result_message.textContent = `Both selected ${player_selection}
            therefore this round is a draw.`;
            break;
        
        case (player_selection ==='rock' && computer_selection==='paper' ||
            player_selection ==='paper' && computer_selection==='scissors'||
            player_selection ==='scissors' && computer_selection==='rock'):
            
            result_message.textContent = `Unlucky...The computer wins this time
            because ${computer_selection} beats ${player_selection}.`;

            comp_score ++

            break;
        
        default:
            result_message.textContent = `Congratulations! ${player_selection}
            beats ${computer_selection}!`;

            player_score ++

            break;
    }
    const scores = document.querySelector('.scores');
    scores.textContent = `Your Score: ${player_score} ︱ Computer's Score: ${comp_score}`;
    return player_score, comp_score
}

function finish(player_score, comp_score) {
    if (player_score === 3 || comp_score === 3) {
        //disable buttons//
        weapon_selector.forEach((button) => {
            button.setAttribute('disabled', '');
            button.classList.add('disabled-button', 'pale')
        });

        const comp_icon = document.querySelector('.comp_fa_icon');
        comp_icon.style.opacity = '0.5';

        const player_icon = document.querySelector('.player_fa_icon');
        player_icon.style.opacity = '0.5';

        const end_message = document.querySelector('.end_message');

        if (player_score > comp_score) {
            result_message.textContent ='You have won 3 times!';
            end_message.textContent = 'CONGRATULATIONS. You are the winner!';
            end_message.style.color = '#000000';
        }
        else {
            result_message.textContent = 'Computer has won 3 times!';
            end_message.textContent = 'Commiserations, you have lost this time.';
            end_message.style.color = '#000000';
        }
        play_again.style.visibility = 'visible';
    }
}

function reset_game() {
    play_again.addEventListener('click', () => {
      window.location.reload();
    });
}

function Game() {
    const player_icon = document.querySelector('.player_fa_icon');
    let player_selection;
    weapon_selector.forEach((weapon) => {
      weapon.addEventListener('click', () => {
        const fa_option = document.querySelectorAll('.weapon-icon');
        player_icon.classList.remove('fa-hand-back-fist', 'fa-hand', 'fa-hand-scissors', 'fa-question');


        if (weapon.classList.contains('rock-button')) {
            fa_option[0].style.color = '#dc143c';
            fa_option[1].style.color = '#5e5e5e';
            fa_option[2].style.color = '#5e5e5e';
            player_selection = 'rock';
            player_icon.classList.add('fa-hand-back-fist');
            player_icon.getElementsByClassName.color = '#dc143c';

        }
        else if (weapon.classList.contains('paper-button')) {
            fa_option[0].style.color = '#5e5e5e';
            fa_option[1].style.color = '#2e8b57';
            fa_option[2].style.color = '#5e5e5e';
            player_selection = 'paper';
            player_icon.classList.add('fa-hand');
            player_icon.getElementsByClassName.color = '#2e8b57';            
        }
        else {
            fa_option[0].style.color = '#5e5e5e';
            fa_option[1].style.color = '#5e5e5e';
            fa_option[2].style.color = '#5f9ea0';
            player_selection = 'scissors'; 
            player_icon.classList.add('fa-hand-scissors');
            player_icon.getElementsByClassName.color = '#5f9ea0';             
        }
        round += 1
        round_num.textContent = `Round: ${round}`;
        play_round(player_selection, getComputerChoice());
        finish(player_score, comp_score);
        reset_game();
        });
    });
}

Game()