// CHOICES AVAILABLE //
CHOICES = ['Rock', 'Paper', 'Scissors']

// Computer random function
function getComputerChoice() {
    return CHOICES[Math.floor(CHOICES.length * Math.random())].toLowerCase();
}

// console.log(getComputerChoice());

// Capitalizes first letter in answer
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

// Ask player to select one of Rocks, Paper or Scissors


// Function which compares output of player vs. computer and gives result
function play_round(player_selection) {
    player_selection = capitalize(player_selection)
    let computer_selection = capitalize(getComputerChoice())
    if (player_selection === computer_selection) {
        console.log("It's a tie")
    } else if (player_selection ==='Rock' && computer_selection==='Paper' ||
                player_selection ==='Paper' && computer_selection==='Scissors'||
                player_selection ==='Scissors' && computer_selection==='Rock') {
        computer_score += 1;            
        console.log(`You Lose! ${computer_selection} beats ${player_selection}`);
    } else {
        player_score += 1;
        console.log(`You Win! ${player_selection} beats ${computer_selection}`);
    }
}

function game() {
    rounds = parseInt(prompt("How many rounds?"));
    player_score = 0
    computer_score = 0
    for (let i = 0; i < rounds; i++) {
        let player_selection = prompt("Rock, Paper, Scissors?").toLowerCase()
        play_round(player_selection)
        console.log(`Current Scores. You:${player_score}, Computer:${computer_score}`)
        if (player_score === Math.ceil(rounds/2)) {
            console.log(`You won!`)
            break 
        }
        if (computer_score === Math.ceil(rounds/2)){
            console.log(`You lost.`)
            break
        }
    }
    console.log(`Final Scores You:${player_score}, Computer:${computer_score}`)
}

console.log(game())

//console.log(play_round(player_selection));

