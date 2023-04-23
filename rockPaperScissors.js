const opcs = ["Rock", "Paper", "Scissors"];

var usr = opcs[Math.floor(Math.random() * opcs.length)];
console.log("User: " + usr);

var cpu = opcs[Math.floor(Math.random() * opcs.length)];
console.log("CPU: "+ cpu);

checkWinner(usr, cpu);

function checkWinner(usr, cpu) {
    if (usr === cpu) {
        console.log("Draw! No one wins");
    } else if (usr === opcs[0] && cpu === opcs[2]){
        console.log("User Wins!");
    } else if (usr === opcs [0] && cpu === opcs[1]){
        console.log("CPU Wins!")
    } else if (usr === opcs[1] && cpu === opcs[0]){
        console.log("User Wins!");
    } else if (usr === opcs[1] && cpu === opcs[2]){
        console.log("CPU Wins!");
    } else if (usr === opcs[2] && cpu === opcs[0]){
        console.log("CPU Wins!")
    } else if (usr === opcs[2] && cpu === opcs[1]){
        console.log("User Wins!");
    } else {
        console.log ("ERROR: non implemented");
    }
}
