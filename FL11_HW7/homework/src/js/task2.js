let playGame = confirm('Do you want to play a game?');
if (!playGame) {
    alert('You did not become a billionaire, but can!');
} else {
    let attempts = 3;
    let maxPrize = 100;
    let range = 8;
    let totalPrize = 0;
    let four = 4;
    let two = 2;
    let three = 3;
    do {
        let possiblePrize = maxPrize;
        let randomInteger = Math.floor(Math.random() * range + 1);
        if (attempts === 1) {
            possiblePrize = Math.floor(possiblePrize / four);
        } else if (attempts === two) {
            possiblePrize = Math.floor(possiblePrize / two);
        }
        let askUser = Number(prompt(`
        Choose a roulette pocket number from 0 to ${range} \n
        Attepts left: ${attempts} \n
        Total prize: ${totalPrize} \n
        Possible prize on current attempt: ${possiblePrize}`));
        if (askUser === randomInteger && attempts === three) {
            alert('Congratulation, you won! Your prize is:' + possiblePrize);
            if (confirm('Do you want to continue?')) {
                totalPrize += maxPrize;
                maxPrize *= two;
                attempts = three;
                range += four;
                continue;
            } else {
                alert('Thank you for your participation. Your prize is: ' + possiblePrize);
                break;
            }
        } else if (askUser === randomInteger && attempts === two) {
            alert('Congratulation, you won! Your prize is:' + possiblePrize);
            if (confirm('Do you want to continue?')) {
                totalPrize += maxPrize / two;
                maxPrize *= two;
                attempts = three;
                range += four;
                continue;
            } else {
                alert('Thank you for your participation. Your prize is: ' + possiblePrize);
                break;
            }
        } else if (askUser === randomInteger && attempts === 1) {
            alert('Congratulation, you won! Your prize is:' + possiblePrize);
            if (confirm('Do you want to continue?')) {
                totalPrize += maxPrize / four;
                maxPrize *= two;
                attempts = three;
                range += four;
                continue;
            } else {
                alert('Thank you for your participation. Your prize is: ' + possiblePrize);
                break;
            }
        }else if(askUser !== randomInteger && attempts === 1){
            possiblePrize = 0;
            alert('Thank you for your participation. Your prize is ' + possiblePrize);
            if(confirm('Do you want to play again?')){
                totalPrize = 0;
                possiblePrize = maxPrize;
                attempts = three;
                continue;
            }
        }
        attempts--;
    }
    while (attempts > 0);
}
