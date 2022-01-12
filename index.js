

let card = [];

function writeCards(names, eventName){
    for (let i = 0; i < names.length; i++){
        card.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return card;
}


function countDown(){
    let startingNum = 10;
    while (startingNum >= 0) {
        console.log(startingNum--);
    }
}

countDown(10);