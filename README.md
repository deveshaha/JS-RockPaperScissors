# Rock-Paper-Scissors Game

This is a simple Rock-Paper-Scissors game created using JavaScript. The game randomly selects one of the three options: rock, paper, or scissors for both the user and the computer. It then compares the choices made by the user and the computer to determine the winner.

## Code Explanation

The game uses an array called `opcs` that contains three strings: "Rock", "Paper", and "Scissors". The `Math.random()` method is used to generate a random index in the `opcs` array, which is used to select a random option for both the user and the computer.

The function `checkWinner()` compares the options selected by the user and the computer to determine the winner. If both select the same option, it prints "Draw! No one wins". If the user selects "Rock" and the computer selects "Scissors", or if the user selects "Paper" and the computer selects "Rock", or if the user selects "Scissors" and the computer selects "Paper", then the user wins. If the computer wins, the corresponding message is printed. If the input parameters are invalid, an error message is printed.

## How to Use

1. Copy and paste the code into a text editor of your choice.
2. Save the file with a .js extension.
3. Open the file using a web browser or a JavaScript runtime environment.
4. The game will randomly select an option for both the user and the computer, and print the winner.

You can modify the game to add more options or make other changes to the code to suit your needs.
