function computerPlay() {
    const playInt = Math.floor(Math.random() * 3)
    let result;
    if (playInt == 0){
        result ='Rock';
    } else if (playInt == 1){
        result ='Paper';
    } else {
        result ='Scissors'
    }
    return result  
    }

function playerSelection() {
    var playerInput = window.prompt("Rock/Paper/Scissors")
    
    
}

console.log(computerPlay())
