function computerPlay() {
    const choices = ('Rock', 'Paper', 'Scissors')
    
    if("Rock".equalsIgnoreCase(choices)) {
        number = 1;
    }
    else if("Paper".equalsIgnoreCase(choices)) {
        number = 2;
    }
    else if("Scissors".equalsIgnoreCase(choices)) {
        number = 0;
    }
    else {
        number = -1;
    }

    Math.floor(Math.random() * choices)
}
console.log(computerPlay())